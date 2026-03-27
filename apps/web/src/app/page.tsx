import { API_BASE_PATH, DEFAULT_PAGE_SIZE, ROUTE_PREFIXES } from '@proposalflow/shared-config';
import { APP_ENVS, SESSION_TYPES, WORKSPACE_ROLES } from '@proposalflow/shared-types';

const highlights = [
  'workspace setup',
  'opportunities',
  'lead brief',
  'discovery',
  'proposal draft',
  'follow-up'
];

export default function WebHome() {
  return (
    <main>
      <section className="shell">
        <p className="eyebrow">ProposalFlow AI Web</p>
        <h1 className="title">A clean shell for the customer product surface.</h1>
        <p className="copy">
          This phase-0 scaffold keeps the product app separate from admin and backend concerns while
          already consuming shared constants from the monorepo packages.
        </p>

        <div className="meta">
          <article className="card">
            <h2>Shared config</h2>
            <p>
              API base path {API_BASE_PATH}, admin route {ROUTE_PREFIXES.admin}, default page size{' '}
              {DEFAULT_PAGE_SIZE}.
            </p>
          </article>

          <article className="card">
            <h2>Shared types</h2>
            <p>
              Environments {APP_ENVS.join(', ')} and sessions {SESSION_TYPES.join(', ')} stay aligned
              across the workspace.
            </p>
          </article>

          <article className="card">
            <h2>Phase 0 surface</h2>
            <ul>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Role boundary</h2>
            <p>Workspace role set: {WORKSPACE_ROLES.join(', ')}.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
