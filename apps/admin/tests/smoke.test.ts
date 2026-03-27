import assert from 'node:assert/strict';
import test from 'node:test';

import { ADMIN_API_BASE_PATH } from '@proposalflow/shared-config';

test('admin app can read shared config', () => {
  assert.equal(ADMIN_API_BASE_PATH, '/api/v1/admin');
});
