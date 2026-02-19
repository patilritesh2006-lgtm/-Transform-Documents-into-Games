import { db } from "./db";
import { uploads, generatedContent, type Upload, type InsertUpload, type GeneratedContent, type InsertGeneratedContent } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  createUpload(upload: InsertUpload): Promise<Upload>;
  getUpload(id: number): Promise<Upload | undefined>;
  createGeneratedContent(content: InsertGeneratedContent): Promise<GeneratedContent>;
  getGeneratedContent(id: number): Promise<GeneratedContent | undefined>;
  listGeneratedContent(): Promise<GeneratedContent[]>;
  getGeneratedContentByUploadId(uploadId: number): Promise<GeneratedContent | undefined>;
}

export class DatabaseStorage implements IStorage {
  async createUpload(upload: InsertUpload): Promise<Upload> {
    const [newUpload] = await db.insert(uploads).values(upload).returning();
    return newUpload;
  }

  async getUpload(id: number): Promise<Upload | undefined> {
    const [upload] = await db.select().from(uploads).where(eq(uploads.id, id));
    return upload;
  }

  async createGeneratedContent(content: InsertGeneratedContent): Promise<GeneratedContent> {
    const [newContent] = await db.insert(generatedContent).values(content).returning();
    return newContent;
  }

  async getGeneratedContent(id: number): Promise<GeneratedContent | undefined> {
    const [content] = await db.select().from(generatedContent).where(eq(generatedContent.id, id));
    return content;
  }

  async listGeneratedContent(): Promise<GeneratedContent[]> {
    return db.select().from(generatedContent).orderBy(desc(generatedContent.createdAt));
  }

  async getGeneratedContentByUploadId(uploadId: number): Promise<GeneratedContent | undefined> {
    const [content] = await db.select().from(generatedContent).where(eq(generatedContent.uploadId, uploadId));
    return content;
  }
}

export const storage = new DatabaseStorage();
