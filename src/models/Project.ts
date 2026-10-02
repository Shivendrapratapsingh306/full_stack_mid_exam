export interface IProject {
  _id?: string;
  title: string;
  slug: string;
  industry: "REAL_ESTATE" | "CAFE" | "CLOTHING" | "HEALTHCARE" | "CRM" | "ECOMMERCE" | "OTHER";
  summary: string;
  problem: string;
  solution: string;
  result: string;
  clientName?: string;
  year: number;
  techStack: string[];
  coverImage: {
    url: string;
    publicId?: string;
  };
  gallery: Array<{
    url: string;
    publicId?: string;
  }>;
  liveUrl?: string;
  featured: boolean;
  isPublished: boolean;
  order: number;
  createdAt?: string;
  updatedAt?: string;
}
