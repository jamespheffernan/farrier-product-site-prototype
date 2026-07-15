# Farrier product-site prototype

This repository preserves an archived multi-page product-site concept for three productivity tools: Blinders, Brace, and Phil. It is a design and messaging prototype, not a live storefront, download service, or statement that every described capability shipped.

The public snapshot starts from a new Git root. It excludes the private `landing-pages` repository's credential-bearing history, email tooling, deployment configuration, analytics and session replay, internal optimisation notes, and the unrelated KitchenLux applications.

## Routes

- `/` — Farrier concept overview
- `/blinders` — focused weekly-review concept
- `/brace` — project-support automation concept
- `/phil` — private local autofill concept

## Run locally

```bash
npm ci
npm run dev
```

## Verify

```bash
npm run lint
npm run build
npm audit --audit-level=high
```

The interface contains no analytics, tracking, forms, checkout, external APIs, or functional download buttons. Some product copy remains intentionally aspirational; the persistent archive banner and this README make clear that it is concept copy, not evidence of shipped behaviour.

No open-source license has been selected. Public visibility permits inspection but does not grant reuse rights.
