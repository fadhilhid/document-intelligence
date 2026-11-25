# Open Decisions

Do not invent these values during implementation.

## Product

- Which staff members may create a workspace, confirm requirements, assign work, or export a response?
- Should a checklist be grouped by source document, submission stage, business function, or remain a flat searchable list first?
- Which fulfillment states and required evidence types match the team’s real process?
- Should the first export be XLSX, DOCX, PDF, or another existing internal template?
- Who resolves conflicting RFP/annex language and records the approved interpretation?
- What target languages and document quality should the first release support? Indonesian and English are baseline assumptions in the project pack, but need representative samples.

## Evidence and automation

- Actual representative tender PDFs and a reviewer-verified expected checklist with page citations.
- Per-file upload cap and ZIP-package import policy. The supplied Annex H engineering drawings PDF is about 150 MiB, exceeding the temporary 100 MiB limit.
- Accuracy and latency acceptance thresholds; do not set without a corpus and benchmark.
- How to signal low OCR quality, diagrams, tables, missing references, and extraction uncertainty.
- Whether/how LLM use is approved, provider/model/endpoint, data location, retention, and user disclosure.

## Operations and security

- Production hostname/FQDN and TLS certificate source.
- Internal-only versus internet-facing access; server IP and firewall/VPN policy.
- Data mount/path and capacity allocation. The observed `/srv` is empty; the available local partitions are not yet assigned to DocIntel.
- Outbound internet access for dependencies/models or an approved offline staging process.
- Backup destination and retention period; restore objectives.
- Malware scanning and quarantine choice before production exposure.
- Existing host services already bind port 80 and multiple other ports; owner decision for routing/migration and exposure policy.
- Existing active workloads leave limited memory headroom at the time observed; decide whether to free resources or benchmark OCR elsewhere.

## Reuse and licensing

- Whether any ARAReader GPL-3.0-or-later code will be copied, and exact scope.
- Legal review of internal hosting, browser-delivered source, external contractors, and any later commercial distribution model.
- Whether to build the reader using independent UI code plus PDF.js instead of copying ARAReader components.
