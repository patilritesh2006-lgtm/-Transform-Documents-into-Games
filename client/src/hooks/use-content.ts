import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl, type GeneratedContent, type Upload } from "@shared/routes";
import { z } from "zod";

// ============================================
// UPLOAD HOOKS
// ============================================

export function useCreateUpload() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch(api.uploads.create.path, {
        method: api.uploads.create.method,
        body: formData,
        // Don't set Content-Type header manually for FormData, browser does it with boundary
      });

      if (!res.ok) {
        throw new Error('Failed to upload file');
      }

      // We expect a Created response
      return api.uploads.create.responses[201].parse(await res.json());
    },
    // We don't necessarily need to invalidate anything unless we list uploads, 
    // but usually we proceed to content generation immediately.
  });
}

export function useUpload(id: number) {
  return useQuery({
    queryKey: [api.uploads.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.uploads.get.path, { id });
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch upload');
      return api.uploads.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}

// ============================================
// CONTENT GENERATION HOOKS
// ============================================

export function useGenerateContent() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (uploadId: number) => {
      const res = await fetch(api.content.generate.path, {
        method: api.content.generate.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uploadId }),
      });

      if (!res.ok) {
        if (res.status === 404) throw new Error('Upload not found');
        throw new Error('Failed to generate content');
      }

      return api.content.generate.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.content.list.path] });
    },
  });
}

export function useContentList() {
  return useQuery({
    queryKey: [api.content.list.path],
    queryFn: async () => {
      const res = await fetch(api.content.list.path);
      if (!res.ok) throw new Error('Failed to fetch content list');
      return api.content.list.responses[200].parse(await res.json());
    },
  });
}

export function useContent(id: number) {
  return useQuery({
    queryKey: [api.content.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.content.get.path, { id });
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch content');
      return api.content.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}
