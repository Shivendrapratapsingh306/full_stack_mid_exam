import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(2, "Title is required").max(120),
  slug: z.string().min(2, "Slug is required").max(120),
  industry: z.enum(["REAL_ESTATE", "CAFE", "CLOTHING", "HEALTHCARE", "CRM", "ECOMMERCE", "OTHER"]),
  summary: z.string().min(10, "Summary must be at least 10 characters"),
  problem: z.string().min(10, "Problem description is required"),
  solution: z.string().min(10, "Solution description is required"),
  result: z.string().min(5, "Result statement is required"),
  coverImage: z.object({
    url: z.string().url("Valid image URL is required"),
    publicId: z.string().optional(),
  }),
  gallery: z.array(
    z.object({
      url: z.string().url(),
      publicId: z.string().optional(),
    })
  ).optional().default([]),
  techStack: z.array(z.string()).min(1, "At least one technology is required"),
  liveUrl: z.string().url().optional().or(z.literal("")),
  clientName: z.string().optional().or(z.literal("")),
  year: z.number().int().min(2020).max(2030).default(2026),
  featured: z.boolean().default(false),
  isPublished: z.boolean().default(true),
  order: z.number().default(0),
});

export type ProjectInput = z.infer<typeof projectSchema>;
