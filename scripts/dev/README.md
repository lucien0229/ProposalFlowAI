# Dev Scripts

Local development helper scripts live here.

Phase-0 local dependency stack:

1. Start `infra/compose/docker-compose.local.yml`
2. Run database migration command when available in a later phase
3. Start `apps/api`
4. Start `apps/worker`
5. Start `apps/web`
6. Start `apps/admin` when needed

Helper entry points:

- `start-local.sh`
- `stop-local.sh`
- `health-local.sh`
