import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const uploads = pgTable("uploads", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  originalName: text("original_name").notNull(),
  mimeType: text("mime_type").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const generatedContent = pgTable("generated_content", {
  id: serial("id").primaryKey(),
  uploadId: integer("upload_id").references(() => uploads.id).notNull(),
  concepts: jsonb("concepts").$type<string[]>().notNull(),
  quizData: jsonb("quiz_data").$type<QuizQuestion[]>().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// === RELATIONS ===
export const generatedContentRelations = relations(generatedContent, ({ one }) => ({
  upload: one(uploads, {
    fields: [generatedContent.uploadId],
    references: [uploads.id],
  }),
}));

// === BASE SCHEMAS ===
export const insertUploadSchema = createInsertSchema(uploads).omit({ id: true, createdAt: true });
export const insertGeneratedContentSchema = createInsertSchema(generatedContent).omit({ id: true, createdAt: true });

// === EXPLICIT API CONTRACT TYPES ===

// Base types
export type Upload = typeof uploads.$inferSelect;
export type GeneratedContent = typeof generatedContent.$inferSelect;

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

// Request types
export type CreateUploadRequest = {
  url: string;
  originalName: string;
  mimeType: string;
};

export type GenerateContentRequest = {
  uploadId: number;
};

// Response types
export type UploadResponse = Upload;
export type GeneratedContentResponse = GeneratedContent;
