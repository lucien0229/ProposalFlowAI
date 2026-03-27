import assert from 'node:assert/strict';
import test from 'node:test';

import { API_BASE_PATH } from '@proposalflow/shared-config';

test('web app can read shared config', () => {
  assert.equal(API_BASE_PATH, '/api/v1');
});
