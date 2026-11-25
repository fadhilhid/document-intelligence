# Tender Package Workflow

## Working rule

Start with one general tender process, not separate tender categories. A workspace contains one opportunity and all of its related documents. The screenshot shared by the owner suggests a package with an RFP and several annexes; its filenames do not establish any tender requirements.

## Candidate requirement record

Each checklist row should contain:

- **Candidate requirement:** concise, faithful wording; do not broaden or strengthen the source.
- **Category:** prerequisite, submission/deliverable, technical/functional, commercial/legal, operational, or unclassified. Categories are organizational labels, not conclusions about compliance.
- **Source:** document ID, displayed filename, page number, and quoted/supporting excerpt.
- **Interpretation:** mandatory/conditional/unclear only when the source supports it; otherwise `Needs interpretation`.
- **Review state:** `Needs review`, `Confirmed`, `Rejected`, `Conflict to resolve`.
- **Fulfillment:** `Not assessed`, `Can fulfill`, `Partially fulfill`, `Cannot fulfill`, `Not applicable`.
- **Response and evidence:** proposed response, internal evidence/document link, explanation, reviewer, owner, due date.
- **History:** actor, time, source extraction version, and changed fields.

## Review behavior

- Preserve separate source statements when their meaning or conditions differ.
- A reviewer may combine duplicates, but the combined item retains links to every source occurrence.
- If two documents differ, show both statements and citations. Never pick a winner based on filenames or presumed document hierarchy.
- Mark a requirement mandatory only when supported by clear source language, and preserve the exact condition or exception.
- Do not convert a general description into a company obligation unless a reviewer accepts it.
- Low-quality OCR, missing page mapping, tables/figures, and ambiguous references go to manual review.
- A completion percentage must distinguish unreviewed items from fulfilled items; unknown is not equivalent to complete.

## Future export

The first useful export is a reviewable spreadsheet or PDF containing the requirement, source/page, review and fulfillment state, owner, due date, response, evidence, and unresolved questions. Choose formats after sales-team feedback.
