import { z } from 'zod';

export const paginationSchema = z.object({
  page: z.number().int().positive().default(1),
  pageSize: z.number().int().positive().max(100).default(20)
});

export const apiErrorSchema = z.object({
  error: z.string()
});

export const sessionTypeSchema = z.enum(['web', 'admin']);
