import { z } from 'zod';
import { insertGeneratedContentSchema, insertUploadSchema, uploads, generatedContent } from './schema';

// ============================================
// SHARED ERROR SCHEMAS
// ============================================
export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

// ============================================
// API CONTRACT
// ============================================
export const api = {
  uploads: {
    create: {
      method: 'POST' as const,
      path: '/api/uploads' as const,
      // Input is FormData, not strictly validated here by Zod for the file itself,
      // but we can define the expected structure for documentation.
      responses: {
        201: z.custom<typeof uploads.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/uploads/:id' as const,
      responses: {
        200: z.custom<typeof uploads.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },
  content: {
    generate: {
      method: 'POST' as const,
      path: '/api/content/generate' as const,
      input: z.object({
        uploadId: z.number(),
      }),
      responses: {
        201: z.custom<typeof generatedContent.$inferSelect>(),
        400: errorSchemas.validation,
        404: errorSchemas.notFound, // If uploadId not found
      },
    },
    list: {
      method: 'GET' as const,
      path: '/api/content' as const,
      responses: {
        200: z.array(z.custom<typeof generatedContent.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/content/:id' as const,
      responses: {
        200: z.custom<typeof generatedContent.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },
};

// ============================================
// HELPER FUNCTIONS
// ============================================
export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

// ============================================
// TYPE HELPERS
// ============================================
export type GenerateContentInput = z.infer<typeof api.content.generate.input>;
