import { z } from "zod";

export const BUDGET_OPTIONS = [
  "Under 50k",
  "50k–1L",
  "1L–3L",
  "3L+",
] as const;

export const SERVICE_OPTIONS = [
  "Web Design",
  "Web Development",
  "E-commerce",
  "CRM / Dashboard",
  "Branding",
  "Maintenance",
  "Other",
] as const;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().max(100, "Company name is too long").optional().or(z.literal("")),
  budget: z.enum(BUDGET_OPTIONS, { message: "Please select a valid budget range" }),
  service: z.enum(SERVICE_OPTIONS, { message: "Please select a service needed" }),
  message: z.string().min(10, "Message must be at least 10 characters long").max(2000, "Message is too long"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
