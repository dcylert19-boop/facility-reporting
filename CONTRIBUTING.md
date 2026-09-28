# Contributing

Start with the [README](README.md) setup. Keep changes small and focused. Use a branch from `main` named `feat/*`, `fix/*`, `docs/*`, or `chore/*`; open a pull request back to `main`. We prefer squash merges and at least one review. Describe the scope, tests, and related issue. Include screenshots only for UI changes.

`apps/api` uses thin controllers, Form Requests for input validation/normalization, an Action per explicit use case, immutable Data objects for useful cross-layer values, and API Resources for JSON. Add Services, Enums, Policies, Jobs, or Events when actual behavior needs them. Keep models focused on persistence and relationships. Do not add generic repositories or base services. Write tests for behavior and regenerate OpenAPI after API changes.

`apps/web` groups behavior under `features/`, routes under `routes/`, shared primitives under `components/ui/`, and API infrastructure under `lib/api/`. Use TanStack Query for server state, file-based TanStack Router routes, generated API types, React Hook Form and Zod when forms are needed, and shadcn/ui primitives. Avoid duplicating the API schema in TypeScript.

Before requesting review, run `make check` and `make audit` with services running. CI repeats formatting, static analysis, OpenAPI validation, tests, and build. Reviewers should focus on correctness, clarity, tests, and whether the change introduces unsupported product assumptions. Product requirements and documentation belong to the internship team's discovery work.
