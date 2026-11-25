# Proposed Architecture

## Context

DocIntel treats one tender opportunity as a workspace containing a set of related source documents. The workflow is a modular monolith plus isolated processing services on a single Docker Compose host.

## Components

| Component | Responsibility |
|---|---|
| NGINX | HTTPS termination, frontend delivery, API routing, upload body limits |
| React/TypeScript frontend | Tender workspace, package upload, source reader, checklist review, fulfillment coordination |
| FastAPI | Authentication, authorization, tender/document/checklist APIs, audit, search, export, chat adapter |
| PostgreSQL | Users, roles, workspace/document metadata, pages/chunks, checklist/review/fulfillment, jobs, audit |
| Redis/Celery | Asynchronous processing and retry coordination |
| Worker | File validation, routing, extraction normalization, candidate checklist generation orchestration |
| PaddleOCR service | CPU OCR for scanned pages, model loaded once; initial concurrency 1 |
| MinIO | Immutable uploaded originals and versioned extracted/checklist artifacts |
| Optional LLM provider | Disabled by default; only receives authorized, selected context after owner approval |

## Network boundaries

Follow the supplied project-pack intent: only NGINX publishes application ports 80 and 443. PostgreSQL, Redis, OCR, API, and MinIO remain internal. MinIO Console is not publicly published. Proposed networks:

- `docintel_app`: NGINX, frontend, API.
- `docintel_processing`: API, worker, Redis, OCR.
- `docintel_data`: API, worker, PostgreSQL, MinIO.

Review actual connectivity needs during Compose validation. Use non-root app/worker and OCR identities; verify official database/storage image behavior before overriding users. Host port 80 is already occupied on the observed server and must be resolved before deployment.

## Processing flow

1. A user creates a tender workspace and uploads PDF files.
2. API validates each upload, creates metadata, writes an immutable original object, and queues a job.
3. Worker inspects each PDF page. Digital text is extracted natively; scanned pages are sent to OCR.
4. Worker stores versioned, page-aware text and diagnostics; it does not modify the original.
5. Checklist generation proposes candidate requirements with source document/page/excerpt. Candidates are not treated as verified commitments.
6. Reviewers confirm, correct, reject, classify, and assign fulfillment. Edits are audited and remain attached to source evidence.
7. Search/chat applies workspace ACL filters before returning text or assembling model context.
8. Export includes reviewer state and source citations; unreviewed items are marked or excluded by default.

## Data and trust boundaries

- Uploaded PDFs, filenames, extracted text, prompt-like document content, and OCR output are untrusted.
- Do not treat document instructions as instructions for the application or model.
- Cite original document and page; preserve extraction version and excerpt to make corrections traceable.
- Do not infer precedence among the RFP and annexes. Record contradictions as conflicts for review.
- External model requests are off unless an administrator configures and approves them.

## Decisions deferred

Hostname/TLS, firewall/VPN and public reachability, chosen data mount, outbound downloads/model staging, backup and retention, OCR quality/latency targets, reviewer/approval roles, external LLM policy, and ARAReader reuse/license approval remain open. See `07_OPEN_DECISIONS.md`.
