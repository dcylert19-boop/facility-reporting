# Facility Reporting

Engineering baseline for an open-source facility reporting system. Product discovery is in progress; requirements and features are not defined in this repository yet.

## Stack

Laravel 13 / PHP 8.5 REST API, React 19 / TypeScript / Vite 8 SPA, and PostgreSQL 18. The frontend uses TanStack Query and Router, Tailwind CSS 4, and shadcn/ui.

## Repository

- `apps/api`: versioned JSON API and generated OpenAPI 3.1 contract
- `apps/web`: React SPA and generated API types
- `docs`: intentionally empty until the team writes product documentation
- `.github`: CI, security, and community workflows

## Prerequisites

PHP 8.5 with `pdo_pgsql`, Composer 2, Node 24 LTS, pnpm 12.6 (Corepack), and Docker Compose with a running Docker daemon. GNU Make is optional. See the equivalent commands below if Make is unavailable.

## Setup

```sh
git clone https://github.com/gmedia/facility-reporting.git
cd facility-reporting
docker compose up -d --wait
make setup
make dev
```

API: <http://localhost:8000/api/v1/status>. Web: <http://localhost:5173>. Local API docs: <http://localhost:8000/docs/api>. The docs and JSON spec are hidden outside local/testing unless `API_DOCS_PUBLIC=true` is explicitly set. Development uses PostgreSQL; it does not fall back to SQLite.

Without Make, run `docker compose up -d --wait`, `composer --working-dir=apps/api install`, copy `apps/api/.env.example` to `apps/api/.env`, run `composer --working-dir=apps/api exec -- php artisan key:generate` once, `pnpm install --frozen-lockfile`, and `composer --working-dir=apps/api exec -- php artisan migrate --force`. Start both servers with `pnpm dev`.

The local PostgreSQL password in Compose is for loopback development only. Change it for any shared environment.

## Commands

| Task | Make | Direct command |
| --- | --- | --- |
| Start services | `make up` | `docker compose up -d --wait` |
| Run apps | `make dev` | `pnpm dev` |
| All checks | `make check` | `pnpm check` |
| Tests | `make test` | `pnpm test` |
| Lint | `make lint` | `pnpm lint` |
| Dependency audit | `make audit` | `pnpm audit` |
| Stop services | `make down` | `docker compose down` |

After changing API routes/resources, run `composer --working-dir=apps/api docs:export` followed by `pnpm --dir apps/web types:generate`, then commit both generated contract files. Frontend requests use `openapi-fetch`; TanStack Query owns server state. Sanctum session cookies and CSRF infrastructure are configured, while authentication flows await product discovery. The current shadcn CLI provides `Field` primitives for React Hook Form/Zod integration instead of the older generated `Form` wrapper.

See [CONTRIBUTING.md](CONTRIBUTING.md) for engineering conventions. Licensed under [Apache-2.0](LICENSE).
