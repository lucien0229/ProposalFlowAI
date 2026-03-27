import assert from 'node:assert/strict';
import test from 'node:test';

import { apiErrorSchema, paginationSchema, sessionTypeSchema } from '../src/index.js';

test('shared schemas validate the phase 0 contract', () => {
  assert.deepEqual(paginationSchema.parse({}), { page: 1, pageSize: 20 });
  assert.deepEqual(apiErrorSchema.parse({ error: 'boom' }), { error: 'boom' });
  assert.equal(sessionTypeSchema.parse('web'), 'web');
});
