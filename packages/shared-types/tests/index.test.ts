import assert from 'node:assert/strict';
import test from 'node:test';

import { APP_ENVS, INTERNAL_ROLES, SESSION_TYPES, WORKSPACE_ROLES } from '../src/index.js';

test('shared types export the frozen phase 0 role sets', () => {
  assert.deepEqual(APP_ENVS, ['local', 'staging', 'production']);
  assert.deepEqual(SESSION_TYPES, ['web', 'admin']);
  assert.deepEqual(WORKSPACE_ROLES, ['owner', 'member']);
  assert.deepEqual(INTERNAL_ROLES, ['internal_admin', 'internal_analyst']);
});
