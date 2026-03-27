import assert from 'node:assert/strict';
import test from 'node:test';

import { ADMIN_API_BASE_PATH, API_BASE_PATH, DEFAULT_PAGE_SIZE, ROUTE_PREFIXES } from '../src/index.js';

test('shared config exports the route and pagination defaults', () => {
  assert.equal(API_BASE_PATH, '/api/v1');
  assert.equal(ADMIN_API_BASE_PATH, '/api/v1/admin');
  assert.equal(DEFAULT_PAGE_SIZE, 20);
  assert.deepEqual(ROUTE_PREFIXES, {
    web: '/',
    admin: '/admin',
    api: '/api/v1',
    apiAdmin: '/api/v1/admin'
  });
});
