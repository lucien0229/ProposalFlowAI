export const API_BASE_PATH = '/api/v1' as const;

export const ADMIN_API_BASE_PATH = '/api/v1/admin' as const;

export const DEFAULT_PAGE_SIZE = 20;

export const ROUTE_PREFIXES = {
  web: '/',
  admin: '/admin',
  api: API_BASE_PATH,
  apiAdmin: ADMIN_API_BASE_PATH
} as const;
