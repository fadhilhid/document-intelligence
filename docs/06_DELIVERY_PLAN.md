# Delivery Plan

## Prepare before production implementation

1. The actual tender-package ZIP has been supplied. Its nine-PDF manifest and archive integrity were checked; an initial source-cited checklist was drafted in `docs/review/MASTRAN_ITS_initial_checklist.md`. Bid-team validation and a complete Annex B/Annex H traceability review remain outstanding.
2. Resolve how to handle the 157,583,136-byte engineering drawings PDF, which exceeds the temporary 100 MiB upload limit, and whether users need ZIP package upload.
3. Agree what counts as a checklist item, who confirms it, how fulfillment is expressed, and how output will be used.
4. Resolve data location, hostname/TLS, access boundary, backups/retention, model-download strategy, and existing port conflicts.
5. Decide whether ARAReader code will be reused; obtain license approval before copying source.

## Milestones

### M0 — Product and source assessment

- Confirm the one-workspace-per-opportunity model and review/fulfillment vocabulary.
- Inspect actual tender sample contents and build a manually reviewed, page-cited benchmark.
- Record ARAReader reuse boundary and legal decision.
- Confirm host readiness and infrastructure decisions.

### M1 — Safe application foundation

- Compose, NGINX, database, Redis, MinIO, FastAPI health/auth skeleton, Alembic migrations, secrets/configuration, internal networks.
- Validate only NGINX host ports, non-root app identities, persistent storage, and backup approach.

### M2 — Workspace, permissions, and uploads

- Login/RBAC; create tender workspaces; PDF validation; immutable original storage; asynchronous job status.

### M3 — Extraction and candidate requirements

- Native PDF text, scanned-page PaddleOCR, page-aware artifacts; candidate checklist generation with traceable citations; retries and versioning.
- Benchmark against the manually reviewed package before making accuracy or timing claims.

### M4 — Review and fulfillment UI

- Document reader with page citations, checklist correction/review, assignment, fulfillment, evidence, conflict handling, responsive UX.

### M5 — Search, export, optional assistance

- ACL-filtered full-text search; useful reviewed checklist export; optional LLM adapter only after provider/data approval.

### M6 — Hardening and rollout

- Audit, malware scanning decision, rate limits, backup/restore demonstration, monitoring, user acceptance and runbook.

## Current prototype boundary

`app/` is a no-dependency browser shell. It supports an in-memory workspace and PDF filename selection only. It has no server, authentication, persistent storage, PDF text extraction, OCR, checklist generation, or document transmission. It is a UI foundation, not a deployable production app.
