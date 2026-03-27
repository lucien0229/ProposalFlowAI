import { ADMIN_API_BASE_PATH, DEFAULT_PAGE_SIZE, ROUTE_PREFIXES } from '@proposalflow/shared-config';
import { INTERNAL_ROLES, SESSION_TYPES } from '@proposalflow/shared-types';

const sections = ['overview', 'workspaces', 'users', 'subscriptions', 'funnels'];

export default function AdminHome() {
  return (
    <main>
      <section className="shell">
        <p className="eyebrow">ProposalFlow AI Admin</p>
        <h1 className="title">A separate admin surface with its own route tree and session semantics.</h1>
        <p className="copy">
          This app is intentionally independent from the customer product app while still reusing shared
          config and type constants.
        </p>

        <div className="grid">
          <article className="card">
            <h2>Admin API</h2>
            <p>
              Namespace base path {ADMIN_API_BASE_PATH} and route prefix {ROUTE_PREFIXES.admin}.
            </p>
          </article>

          <article className="card">
            <h2>Session boundary</h2>
            <p>Shared session types: {SESSION_TYPES.join(', ')}.</p>
          </article>

          <article className="card">
            <h2>Internal roles</h2>
            <p>{INTERNAL_ROLES.join(', ')}.</p>
          </article>

          <article className="card">
            <h2>Phase 0 admin scope</h2>
            <ul>
              {sections.map((section) => (
                <li key={section}>{section}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Default page size</h2>
            <p>{DEFAULT_PAGE_SIZE}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
