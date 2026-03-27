# ProposalFlow AI

Monorepo skeleton for the ProposalFlow AI product family.

## Layout

- `apps/web` - customer-facing product app
- `apps/admin` - internal admin app
- `apps/api` - FastAPI backend
- `apps/worker` - background worker
- `packages/shared-types` - shared TypeScript types
- `packages/shared-config` - shared constants
- `packages/shared-schemas` - shared validation schemas

## Commands

- `corepack pnpm lint`
- `corepack pnpm typecheck`
- `corepack pnpm test`
- `corepack pnpm build`
