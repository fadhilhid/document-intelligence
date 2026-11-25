# Product Requirements Document

**Product:** Document Intelligence Platform (DocIntel)  
**Initial workflow:** tender package review and fulfillment for a sales team  
**Status:** working draft, updated after an initial source review of the supplied tender-package archive. The initial checklist is selective and still needs bid-team validation.

## Problem

Sales teams receive a tender as a group of related documents: an RFP, Terms of Reference, technical requirements, specifications, process documents, designs, and drawings. Requirements can be repeated, qualified, or contradicted across the package. Staff need a reliable way to identify prerequisites, find their source, decide what the company can fulfill, and coordinate the response.

## Product goal

Turn a group of tender documents into a source-linked, human-reviewable checklist and fulfillment workspace. The system assists review; it does not make bid/no-bid or compliance decisions on behalf of the team.

## Users

- **Sales owner:** creates a tender workspace, coordinates review, assigns fulfillment, and monitors readiness.
- **Requirement reviewer / subject-matter expert:** verifies extracted requirements against source pages and records a response or clarification.
- **Workspace administrator:** manages access and system configuration.

These roles describe responsibilities, not final RBAC names. Role definitions remain an open decision.

## Primary workflow

1. Create one workspace for one tender opportunity.
2. Add the RFP and related annexes as one document package.
3. Process files asynchronously and show per-file progress or a clear error.
4. Extract candidate requirements with source document, page, and supporting excerpt.
5. Review, correct, combine, or reject candidates. Preserve source traceability when editing.
6. Classify whether an item is a prerequisite, deliverable, technical/functional requirement, commercial/legal condition, or other; allow an explicit “unclassified” state.
7. Record applicability, fulfillment status, owner, due date, response, and evidence.
8. Review missing information, cross-document conflicts, and unverified items before preparing the tender response.
9. Export a reviewed checklist with citations.

## MVP requirements

### Tender workspaces and documents

- Create and name a tender workspace; buyer, reference number, closing date, and internal owner are optional metadata until confirmed.
- Upload multiple PDF files into one workspace, preserving each original as immutable source material.
- Show filename, processing state, page count when available, and safe error detail.
- Allow authorized users to view/download source documents and navigate to cited pages.
- Support reprocessing without silently replacing previously reviewed checklist entries.

### Requirement checklist

- Each extracted item includes a concise candidate statement, source document, page number, and supporting excerpt.
- Record whether the item is mandatory only when source language supports that interpretation; otherwise mark it for reviewer judgment.
- Provide review states such as `Needs review`, `Confirmed`, `Rejected`, and `Conflict to resolve`.
- Track fulfillment as `Not assessed`, `Can fulfill`, `Partially fulfill`, `Cannot fulfill`, or `Not applicable`, with a written explanation.
- Support an assigned owner, due date, response text, and evidence reference.
- Keep edits and review decisions attributable to a user and timestamp.
- Highlight missing citations, uncertain extraction, and conflicting source statements. Never silently resolve conflicts or infer precedence between annexes.
- Export only the reviewed checklist by default; mark unreviewed entries clearly if included.

### Search and assistance

- Search authorized tender documents and checklist items.
- Any generated answer must include source document and page citations and support opening the cited page.
- If evidence is missing or conflicting, say so and request human review.
- External LLM use remains off until the owner approves a provider and data-transmission policy.

### Security and operations

- Authenticate users and enforce workspace/document permissions on every read, download, search, export, and chat request.
- Treat uploaded files and extracted text as untrusted input.
- Keep credentials out of source control and browser code.
- Log actions and processing metadata without logging document body text or secrets.
- Retain originals unchanged; store derived artifacts as versioned outputs.

## Non-goals for the first release

- Separate products or workflows by tender category.
- Automatic legal interpretation, bid/no-bid decisions, or guaranteed compliance conclusions.
- Automatic assignment of a requirement as “mandatory” without source evidence and review.
- Editing or rewriting the source PDFs.
- Procurement portal integrations, e-signing, external SSO, billing, or public multi-tenant SaaS.
- Sending documents to an external AI service without explicit configuration and approval.

## Success measures to establish

Measure checklist coverage and citation correctness against a manually reviewed tender corpus; reviewer correction rate; time from package upload to approved checklist; number of unresolved conflicts; and time to produce an assigned fulfillment view. Targets should be set only after representative packages are supplied and measured.

## Initial example package

The supplied ZIP contains nine PDFs totaling 209,818,058 bytes before compression: an RFP, ToR, technical requirements, equipment specifications, operations/institutional material, a business process manual, an interface requirements specification, a high-level design, and engineering drawings. An initial source-cited checklist is in [the review draft](review/MASTRAN_ITS_initial_checklist.md). The engineering drawings PDF is 157,583,136 bytes (about 150 MiB), which exceeds the project-pack's temporary 100 MiB per-file upload limit. Archive integrity and text extraction were checked; two drawing sheets were visually inspected. The review is not a complete clause-by-clause assessment. Whether users can upload ZIP packages and what per-file limit to support are open decisions.
