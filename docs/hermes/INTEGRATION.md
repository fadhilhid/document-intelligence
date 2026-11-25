# DocIntel and Hermes integration

## Flow

1. The browser calls the DocIntel FastAPI endpoints on the same origin and uploads workspace details and PDF files.
2. The backend stores each original PDF below `var/docintel/tenders/` using a sanitized `snake_case` filename. The original display name stays in metadata.
3. PyMuPDF extracts selectable text on the server into a sibling Markdown file with explicit `PDF page N` headings. The original PDF is not modified. Pages without a text layer are marked for review; OCR is not run.
4. When a user clicks **Build requirement checklist**, the backend creates a background job and asks the Hermes API server to read only those Markdown files using the installed `docintel-tender-checklist` skill.
5. Hermes returns a compact sales screening checklist. The backend saves JSON metadata and a generated Markdown artifact, then the browser polls the job and displays the result for human review.

PDF extraction runs on the server and does not call an LLM. Checklist generation asks Hermes to read the extracted Markdown. That inference uses the provider configured in Hermes, including its usage allowance and data policy.

## App API and Hermes API

The web app calls its own FastAPI backend using same-origin paths. It does not call Hermes directly, and the Hermes API key never reaches the browser. FastAPI also serves the OpenAPI reference at `http://<server-ip>:8000/docs` when the app is running.

| DocIntel endpoint | Purpose |
|---|---|
| `GET /api/v1/health` | Check that the app backend responds |
| `GET, POST /api/v1/workspaces` | List or create tender workspaces |
| `POST /api/v1/workspaces/{id}/documents` | Upload PDFs as multipart form field `files` |
| `POST /api/v1/workspaces/{id}/checklist` | Start checklist generation; returns a job ID |
| `GET /api/v1/jobs/{job_id}` | Poll job status and read the completed checklist |
| `GET /api/v1/workspaces/{id}/checklist/latest` | Load the latest completed checklist |

The backend separately calls Hermes at `http://127.0.0.1:8642/v1/chat/completions` using the bearer key configured on the server. Hermes must be on the same server as DocIntel because it reads the Markdown files by their server-side paths. Keep port `8642` private on loopback; only the DocIntel port needs to be reachable by sales devices.

## Hermes API server setup

The Hermes API server is not enabled automatically by this project. Configure it in the Hermes profile that has the DocIntel skill:

```dotenv
API_SERVER_ENABLED=true
API_SERVER_KEY=<a-long-random-secret>
API_SERVER_HOST=127.0.0.1
API_SERVER_PORT=8642
```

Keep the API server on loopback. It exposes the Hermes agent's full toolset, so do not publish port `8642` to the LAN or internet. Start the Hermes gateway under the same account/profile that has the `docintel-tender-checklist` skill, and keep it running while DocIntel is processing jobs.

Set `HERMES_API_KEY` in the DocIntel backend environment to the same secret as `API_SERVER_KEY`. Never put either key in `app/` or browser JavaScript. `backend/.env.example` lists the other backend settings; it is a template, not an automatically loaded secrets file.

## Install and run the server app

Run these commands on the server from the project root:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r backend/requirements.txt
export DOCINTEL_DATA_DIR="$PWD/var/docintel"
export HERMES_API_KEY="<same-secret-as-API_SERVER_KEY>"
export HERMES_BASE_URL="http://127.0.0.1:8642/v1"
export HERMES_MODEL="hermes-agent"
uvicorn backend.main:app --host 0.0.0.0 --port 8000
```

Find the server's private IP with `hostname -I`, then open `http://<server-ip>:8000` from a sales-team device. The browser app and its API share this IP and port. Allow inbound port `8000` only from the sales VPN/subnet in the server firewall. Keep Hermes port `8642` bound to loopback. For real tender documents, prefer HTTPS through a reverse proxy; direct Uvicorn access uses HTTP. The backend creates `var/docintel/tenders/` and `var/docintel/docintel.sqlite3` on first start. The configured size limit is 100 MiB per PDF; the large engineering-drawings file remains outside this pilot limit until storage and page-processing capacity are decided.

## Keep both processes running with systemd

The server uses systemd user services for both Hermes and DocIntel. Hermes is installed with `hermes gateway install --start-now --start-on-login`; its API key stays in the Hermes profile. DocIntel reads only `HERMES_API_KEY` from the private file `~/.config/docintel/docintel.env` (permissions `0600`). Do not copy the full Hermes `.env` into the DocIntel service.

Install the checked-in DocIntel unit and enable it for the `bisdev` user:

```bash
install -D -m 0644 deploy/systemd/docintel.service ~/.config/systemd/user/docintel.service
systemctl --user daemon-reload
systemctl --user enable --now docintel.service
sudo loginctl enable-linger bisdev
```

Linger lets these enabled user services start at boot and continue after SSH logout. Check both services with `hermes gateway status` and `systemctl --user status docintel.service`. Follow logs with `journalctl --user -u hermes-gateway -f` or `journalctl --user -u docintel.service -f`. If `API_SERVER_KEY` changes, update the DocIntel secret file and restart both affected processes.

## Sales-team access without app login

The prototype intentionally has no account or workspace ACL system. The team confirmed that access is restricted by the private sales network. The command above binds DocIntel to all server interfaces so sales devices can reach it; do this only while the firewall/VPN restriction is active. Anyone admitted by that network boundary can read every workspace, upload/delete documents, and generate checklists. Hermes should remain bound to loopback even when DocIntel is available to the team.

## Limits

- Page text extraction runs on the server and is page-aware, but this prototype does not OCR scanned pages.
- Hermes' API server does not accept PDF file uploads. DocIntel passes server-side Markdown paths to the Hermes agent; both services must run on the same server and the Hermes profile must be able to read the configured data directory.
- The first checklist is a compact sales screening, not a complete technical compliance matrix. Every fulfilment status is forced to `Not assessed`.
- Checklist candidates are drafts. Review citations and source coverage before acting on them.
- Jobs are persisted in SQLite, but work running during a backend restart is marked failed and can be started again.
