# Portfolio — Cheikh Oumar Sy

Portfolio site for **Cheikh Oumar Sy**, ingénieur génie civil (structures). Editorial, art-directed front end backed by a fully editable CMS.

- **Framework:** Next.js 16 (App Router, React 19)
- **CMS:** Payload CMS 3 (admin at `/admin`)
- **Database:** PostgreSQL (`@payloadcms/db-postgres`)
- **Rich text:** Lexical (`@payloadcms/richtext-lexical`)
- **Images:** `sharp`
- **Package manager:** pnpm 9

## Requirements

- Node.js (project developed on v22+/v26)
- pnpm 9 (`corepack enable` or `npm i -g pnpm`)
- A reachable PostgreSQL database

## Environment

Create a `.env` in the project root:

```
DATABASE_URI=postgres://user:password@host:5432/dbname
PAYLOAD_SECRET=<long-random-string>
```

Both are required. `PAYLOAD_SECRET` signs auth tokens — keep it secret and stable per environment.

## Getting started (local)

First time, from a fresh clone (requires a running PostgreSQL server):

```bash
pnpm setup          # installs deps, creates .env (with a generated PAYLOAD_SECRET), creates the database, runs migrations, seeds content
```

`pnpm setup` will create the database automatically if the Postgres CLI (`createdb`) is installed. It does not install or start the Postgres server itself — that must already be running. After migrations it seeds the initial content, so the site isn't blank on first run.

Edit `.env` and set `DATABASE_URI` to your Postgres connection string (setup will remind you). Then:

```bash
pnpm migrate && pnpm seed   # if setup skipped them because the DB wasn't configured yet
pnpm dev                    # http://localhost:3000  (admin at /admin)
```

Or do it manually:

```bash
pnpm install
cp .env.example .env   # then fill in DATABASE_URI and PAYLOAD_SECRET
pnpm migrate && pnpm seed
pnpm dev
```

Without seeding, the frontend renders empty — all sections (hero, about, projects, experience, etc.) come from Payload, so a fresh database shows nothing until `pnpm seed` runs.

Optional:

```bash
pnpm seed           # (re)seed initial content — idempotent, safe to re-run
```

## Scripts

| Script | Description |
| --- | --- |
| `pnpm setup` | First-time setup: install deps, create `.env`, create the database, run migrations |
| `pnpm dev` | Next dev server on port 3000 |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build (port 3000) |
| `pnpm lint` | Next.js lint |
| `pnpm migrate` | Apply Payload DB migrations (production) |
| `pnpm migrate:create <name>` | Generate a new migration from schema changes |
| `pnpm generate:types` | Regenerate `src/payload-types.ts` |
| `pnpm generate:importmap` | Regenerate the admin import map |
| `pnpm seed` | Seed/refresh initial content (idempotent). Uses `payload run` |

> The `payload` / `migrate*` scripts do **not** auto-load `.env`. For local migrate/status commands, prefix them:
> ```bash
> set -a; source .env; set +a; pnpm payload migrate:status
> ```
> In production the platform injects `DATABASE_URI` and `PAYLOAD_SECRET`, so `pnpm migrate` runs as-is.

## Project structure

```
src/
  app/
    (frontend)/        # public site — layout, page, components, lib
    (payload)/         # Payload admin UI + REST/GraphQL API routes
  collections/         # Projects, Experience, Freelance, Education, Media, Users
  globals/             # Hero, About, Publication, Skills, Contact, Site
  migrations/          # committed Payload/Postgres migrations
  payload.config.ts    # Payload configuration (adapter, collections, globals)
  payload-types.ts     # generated types (do not edit by hand)
  seed.ts              # content seed script
```

## Content model

Everything on the site is editable from `/admin`.

**Collections** (repeatable content):
- `Projects` — portfolio projects (specs, tags, images)
- `Experience` — professional experience
- `Freelance` — freelance work
- `Education` — education history
- `Media` — uploaded images/files
- `Users` — admin users

**Globals** (single-instance content):
- `Hero`, `About`, `Publication` (holds multiple articles — the Recherche section becomes a carousel when there is more than one), `Skills`, `Stats` (the "chiffres" tally block shown inside À propos), `Contact`, `Site`

## Deployment

Migrations run **automatically on every deploy**. Vercel prefers the `vercel-build`
script when present, which is set to `payload migrate && next build` — so committed
migrations in `src/migrations/` are applied against the production database before
the app is built. (The plain `build` script stays `next build` so local builds and
collaborators don't need a database connection.)

1. Provision PostgreSQL and set `DATABASE_URI` + `PAYLOAD_SECRET` in the Vercel project env.
2. Deploy. Vercel runs `pnpm install` then `vercel-build` (`payload migrate && next build`).
3. Seed once if the database is empty (the site renders blank until content exists):
   `pnpm seed` — or enter content from `/admin`.

When you change collections/globals, generate a migration locally
(`pnpm migrate:create <name>`), commit it, and it is applied on the next deploy.

> **Important — the production database must follow the migrations workflow, not dev push.**
> `payload migrate` only runs cleanly and non-interactively against a database whose
> schema was built by migrations. If the production database was ever run in dev mode
> (dynamic schema push), Payload writes a `batch = -1` sentinel row into
> `payload_migrations`; the next `payload migrate` then shows an interactive
> data-loss prompt (which cannot be answered in Vercel's non-TTY build and defaults
> to skipping migrations). Deploy against a **fresh database** that has never been
> dev-pushed. If you must adopt an already dev-pushed database, baseline it once:
> mark the existing migrations as applied (insert their rows into `payload_migrations`
> with a real batch and remove the `batch = -1` row) so future `payload migrate` runs
> only apply new migrations. Do this deliberately, with a backup — never let the build
> re-run the initial migration against tables that already exist.

## Branches

- **`main`** — production branch (full CMS site). Deploy from here.
- **`deprecated`** — frozen snapshot of the previous `main` (pre-CMS editorial site). Reference/rollback only.
- **`variation/chantier`** — the development branch the CMS work was built on (merged into `main`).

## Notes

- Source assets (heavy CAD files / renders under `Docs/`) and runtime uploads (`public/uploads/`) are gitignored; optimized copies live in `public/`.
