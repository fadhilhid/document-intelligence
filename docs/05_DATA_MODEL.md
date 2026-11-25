# Proposed Data Model

This is a first-pass logical model, not a finalized schema. Use UUID identifiers and UTC timestamps. Apply Alembic migrations for schema changes.

| Entity | Purpose and important relations |
|---|---|
| `users`, `roles`, `user_roles` | Local identity, role assignment, disabled state, audit identity |
| `tender_workspaces` | One opportunity/package; name, optional buyer/reference/closing date, owner, status |
| `workspace_permissions` | User/team access to a workspace and permitted actions |
| `documents` | Immutable original metadata, workspace, owner/uploader, object key, MIME/size/hash, page count, lifecycle state |
| `document_artifacts` | Versioned Markdown/JSON/page extraction output, engine and processing metadata |
| `document_pages` | Per-page native/OCR text, extraction method, diagnostics, searchable content |
| `processing_jobs` | Queue state, attempts, correlation ID, safe error, timestamps |
| `requirements` | Candidate/reviewed checklist item, category, interpretation, review state, fulfillment state, owner, due date, response |
| `requirement_sources` | Many-to-many link from a requirement to one or more document/page/excerpt occurrences |
| `requirement_evidence` | Internal evidence document/artifact reference and explanatory note |
| `requirement_history` | Auditable changes and reviewer decisions; avoid copying whole tender text into logs |
| `audit_events` | Login, upload, download, share, review, role and export events |
| `chat_sessions`, `chat_messages` | Optional, scoped assistance metadata; enforce workspace ACL before retrieval |

## Integrity constraints

- Every document, page, requirement, source citation, and evidence reference is scoped to a workspace.
- A citation must point to an existing document and a valid page in the processed version.
- Source excerpts are stored only as needed to support review and are access-controlled like the source document.
- Reprocessing creates a new artifact version and candidate set. It must not overwrite reviewer decisions.
- Workspace deletion and retention behavior remain undecided and must be designed with backup/restore policy.
