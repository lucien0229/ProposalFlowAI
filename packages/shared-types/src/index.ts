export const APP_ENVS = ['local', 'staging', 'production'] as const;

export const SESSION_TYPES = ['web', 'admin'] as const;

export const WORKSPACE_ROLES = ['owner', 'member'] as const;

export const INTERNAL_ROLES = ['internal_admin', 'internal_analyst'] as const;

export type AppEnv = (typeof APP_ENVS)[number];
export type SessionType = (typeof SESSION_TYPES)[number];
export type WorkspaceRole = (typeof WORKSPACE_ROLES)[number];
export type InternalRole = (typeof INTERNAL_ROLES)[number];

export interface ApiPagination {
  page: number;
  pageSize: number;
  total?: number;
}

export interface ApiSuccessEnvelope<T> {
  success: true;
  data: T;
  error: null;
  pagination?: ApiPagination;
}

export interface ApiErrorEnvelope {
  success: false;
  data: null;
  error: string;
  pagination?: ApiPagination;
}

export type ApiEnvelope<T> = ApiSuccessEnvelope<T> | ApiErrorEnvelope;
