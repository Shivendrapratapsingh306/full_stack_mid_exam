import { SAMPLE_PROJECTS, ProjectData } from "@/content/projectsData";

export interface ProjectQueryOptions {
  industry?: string;
  featured?: boolean;
  search?: string;
}

/**
 * Data access abstraction layer for Projects.
 * Synchronous/instant performance with zero artificial latency.
 */
export async function getProjects(options?: ProjectQueryOptions): Promise<ProjectData[]> {
  let projects = [...SAMPLE_PROJECTS];

  if (options?.industry && options.industry !== "ALL") {
    projects = projects.filter((p) => p.industry === options.industry);
  }

  if (options?.featured) {
    projects = projects.filter((p) => p.featured);
  }

  if (options?.search) {
    const q = options.search.toLowerCase();
    projects = projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q))
    );
  }

  return projects;
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
  const project = SAMPLE_PROJECTS.find((p) => p.slug === slug);
  return project || null;
}

export async function getNextProject(currentSlug: string): Promise<ProjectData> {
  const index = SAMPLE_PROJECTS.findIndex((p) => p.slug === currentSlug);
  if (index === -1 || index === SAMPLE_PROJECTS.length - 1) {
    return SAMPLE_PROJECTS[0];
  }
  return SAMPLE_PROJECTS[index + 1];
}
