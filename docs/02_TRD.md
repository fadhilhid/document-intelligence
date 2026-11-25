# Technical Requirements Document

**Status:** proposed direction, not an implementation commitment. Detailed versions and infrastructure values require compatibility checks and owner decisions.

## Proposed system

- Browser application hosted on the existing Ubuntu server.
- React + TypeScript frontend, served behind NGINX.
- FastAPI modular backend with SQLAlchemy 2 and Alembic migrations.
- PostgreSQL for users, workspace metadata, checklist items, audit events, and full-text search.
- Redis + Celery for asynchronous document-processing jobs.
- MinIO-compatible S3 storage for immutable originals and versioned artifacts.
- Isolated CPU PaddleOCR service for scanned PDFs; native text extraction for digital pages; MarkItDown for any subsequently approved non-PDF formats.
- LLM adapter disabled by default; retrieval filters by current user’s access before context assembly.
- Docker Compose on one host; no Kubernetes or vector database in the first release without an approved decision.

These components follow the supplied project-pack baseline, adjusted to the tender-review product goal. Pin exact versions only after compatibility verification.

## Functional requirements

- Accept PDF tender documents in a workspace; enforce configured size, page, and processing limits.
- The supplied sample package contains one 157,583,136-byte engineering-drawings PDF, larger than the temporary 100 MiB per-file limit. Resolve the allowed size and ZIP-package behavior before implementing production uploads; do not silently reject or truncate the representative file.
- Validate extension, MIME type, and signature where feasible; reject malformed input safely.
- Store the original under a server-generated object key; never use user filenames as storage paths.
- Return a job identifier promptly and process asynchronously.
- Detect digital text per page; use native extraction where adequate and OCR only for scanned/insufficient-text pages where feasible.
- Persist page-aware extracted text, method, engine/version, timestamps, and diagnostics.
- Create checklist candidates with page citation and excerpt; retain a link to extraction version and source document.
- Preserve reviewed checklist decisions across reprocessing and expose changed candidates for review.
- Support audit history and export of reviewed checklist items.

## Security requirements

- Secure, HTTP-only, SameSite session cookies over HTTPS; Argon2id password hashing preferred.
- Rate-limit login and apply server-side RBAC plus workspace/document ACL checks to every endpoint.
- No default production admin password; bootstrap through a one-time administrative action.
- Non-root application containers and least-privilege service identities.
- Internal-only PostgreSQL, Redis, OCR, API, and MinIO services; NGINX is the only application host-port publisher (80/443). SSH policy is an OS administration decision.
- Do not use MinIO root credentials for application access.
- No external LLM transmission until provider, model, endpoint, approval, and disclosure requirements are recorded.
- Sanitize user-visible processing errors; do not place secrets or document text in logs.

## Reliability and operations

- Idempotent processing jobs, bounded retries, visible failure state, and explicit reprocessing version.
- Health/readiness checks, structured logs, correlation IDs, job IDs, and operational metrics.
- OCR model loads once per service lifecycle; initial OCR concurrency is one until benchmark evidence supports a change.
- Backup and restore procedures cover PostgreSQL metadata and object storage; retention and backup destination require owner decision.
- UTC timestamps in storage; display in Asia/Jakarta.
- Document deployment, environment configuration, restore, and operator procedures.

## Initial API surface (candidate)

- `POST/GET /api/v1/tenders`, `GET/PATCH/DELETE /api/v1/tenders/{id}`
- `POST/GET /api/v1/tenders/{id}/documents`, `GET /api/v1/documents/{id}`, `/download`, `/pages`
- `GET /api/v1/jobs/{id}`, `POST /api/v1/documents/{id}/retry`
- `GET/POST/PATCH /api/v1/tenders/{id}/requirements`
- `POST /api/v1/requirements/{id}/review`, `/fulfillment`, `/evidence`
- `GET /api/v1/search`, `GET /api/v1/tenders/{id}/export`
- `GET /health/live`, `GET /health/ready`

The exact resource names, payloads, pagination, and role model are to be finalized before backend implementation.

## Capacity assumptions

The supplied baseline states 1–10 concurrent users, 18 vCPU, 32 GB RAM, CPU-only, and approximately 465 GB storage. The observed machine has 18 CPUs and x86_64 Ubuntu, but available memory was about 4.7 GiB at inspection; current services already use substantial resources. Capacity and storage allocation must be measured before OCR load or production deployment.

## Acceptance evidence

- Multiple PDFs form one tender workspace and originals remain unchanged.
- Digital and scanned sample pages take the expected extraction path.
- Each candidate requirement can be opened at its source page.
- ACL checks prevent unauthorized list, page, download, search, export, and chat access.
- Reprocessing does not erase reviewer decisions.
- Conflicting statements remain visible for human resolution.
- Only approved host ports are published and a restore is demonstrated.
