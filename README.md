# DocIntel

DocIntel is being shaped into a tender-package workspace for sales teams. A user groups an RFP and its annexes together, reviews extracted prerequisites with source citations, and tracks how the team will fulfill each requirement.

## Current state

This repository contains the DocIntel browser app, a FastAPI backend, and product/technical documents. The app persists tender workspaces on the server, stores uploaded PDFs, extracts page-marked Markdown, and can ask a configured Hermes API server for a compact sales screening checklist.

## Run the internal prototype

Follow [the Hermes integration guide](docs/hermes/INTEGRATION.md) to configure Hermes and the backend. The app and Hermes can run as systemd user services with linger enabled. Bind DocIntel to `0.0.0.0:8000`, restrict port `8000` to the sales VPN/firewall, then open `http://<server-ip>:8000` from a sales device. Hermes stays bound to loopback; DocIntel has no sign-in or workspace-level access controls.

The initial checklist is a review draft, not a final compliance determination. Scanned-page OCR, full technical compliance review, and team accounts are not implemented.

## Product and engineering documents

- `docs/01_PRD.md` — product requirements
- `docs/02_TRD.md` — technical requirements
- `docs/03_ARCHITECTURE.md` — proposed service and data flow
- `docs/04_TENDER_WORKFLOW.md` — package review and checklist behavior
- `docs/05_DATA_MODEL.md` — proposed core entities
- `docs/06_DELIVERY_PLAN.md` — milestones and first implementation sequence
- `docs/07_OPEN_DECISIONS.md` — decisions that need evidence or owner input
- `docs/DESIGN.md` — visual and interaction direction
- `docs/review/MASTRAN_ITS_initial_checklist.md` — initial source-cited checklist draft for the supplied MASTRAN ITS tender package
- `docs/hermes/README.md` — Hermes Agent setup status
- `docs/hermes/INTEGRATION.md` — upload flow, API routes, Hermes connection, and IP:port deployment

The ARAReader checkout under `references/arareader` is reference material. It remains unmodified. Any source reuse requires license review and an explicit reuse decision.
