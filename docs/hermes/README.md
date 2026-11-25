# Hermes checklist setup

The `docintel-tender-checklist` skill is installed in the Hermes profile for the `bisdev` account. The source copy is [docintel-tender-checklist/SKILL.md](docintel-tender-checklist/SKILL.md). Hermes was switched to **ChatGPT/Codex Subscription** with `gpt-6-luna`; a short request succeeded in the CLI.

The browser app now has a server backend for PDF upload, page-aware Markdown extraction, and checklist generation through the Hermes API. The Hermes API server itself still needs to be enabled in Hermes and pointed at this profile before the web flow can call it. See [INTEGRATION.md](INTEGRATION.md) for API routes, setup, and network boundaries.

The backend passes local Markdown paths to Hermes; it does not upload PDFs through the Hermes API. The checklist skill keeps page citations, separates tender requirements from bidder evidence, and marks company fulfilment as `Not assessed` when no internal evidence was supplied.
