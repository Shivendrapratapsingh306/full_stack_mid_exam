import { SAMPLE_PROJECTS, ProjectData } from "@/content/projectsData";

export interface StoredEnquiry {
  _id: string;
  name: string;
  email: string;
  company?: string;
  budget: string;
  service: string;
  message: string;
  status: "NEW" | "READ" | "REPLIED" | "ARCHIVED";
  createdAt: string;
}

// In-memory global store for enquiries & projects
const globalStore = global as unknown as {
  enquiries: StoredEnquiry[];
  projects: ProjectData[];
};

if (!globalStore.enquiries) {
  globalStore.enquiries = [
    {
      _id: "enq-1",
      name: "Rahul Mehta (Sample)",
      email: "rahul@cafedelight.in",
      company: "Cafe Delight",
      budget: "50k–1L",
      service: "Web Development",
      message: "Need a site for our new flagship cafe location.",
      status: "NEW",
      createdAt: new Date().toISOString(),
    },
  ];
}

if (!globalStore.projects) {
  globalStore.projects = [...SAMPLE_PROJECTS];
}

export const memoryStore = {
  getEnquiries: () => globalStore.enquiries,
  addEnquiry: (enquiry: Omit<StoredEnquiry, "_id" | "createdAt" | "status">) => {
    const newEnquiry: StoredEnquiry = {
      ...enquiry,
      _id: `enq-${Date.now()}`,
      status: "NEW",
      createdAt: new Date().toISOString(),
    };
    globalStore.enquiries.unshift(newEnquiry);
    return newEnquiry;
  },
  updateEnquiryStatus: (id: string, status: StoredEnquiry["status"]) => {
    const item = globalStore.enquiries.find((e) => e._id === id);
    if (item) {
      item.status = status;
    }
    return item || null;
  },
  getProjects: () => globalStore.projects,
  addProject: (project: ProjectData) => {
    globalStore.projects.unshift(project);
    return project;
  },
  updateProject: (id: string, update: Partial<ProjectData>) => {
    const index = globalStore.projects.findIndex((p) => p.id === id);
    if (index !== -1) {
      globalStore.projects[index] = { ...globalStore.projects[index], ...update };
      return globalStore.projects[index];
    }
    return null;
  },
  deleteProject: (id: string) => {
    const index = globalStore.projects.findIndex((p) => p.id === id);
    if (index !== -1) {
      globalStore.projects.splice(index, 1);
      return true;
    }
    return false;
  },
};
