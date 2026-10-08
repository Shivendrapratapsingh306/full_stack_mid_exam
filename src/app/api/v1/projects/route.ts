import { NextResponse } from "next/server";
import { getAdminFromCookie } from "@/lib/jwt";
import { projectSchema } from "@/validators/project.schema";
import { memoryStore } from "@/lib/store";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const industry = searchParams.get("industry");
    const featured = searchParams.get("featured");

    let projects = memoryStore.getProjects();

    if (industry && industry !== "ALL") {
      projects = projects.filter((p) => p.industry === industry);
    }

    if (featured === "true") {
      projects = projects.filter((p) => p.featured);
    }

    return NextResponse.json({
      success: true,
      data: projects,
      total: projects.length,
    });
  } catch (error) {
    console.error("GET /projects error:", error);
    return NextResponse.json(
      {
        success: false,
        error: { code: "SERVER_ERROR", message: "Failed to fetch projects." },
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const admin = await getAdminFromCookie();
  if (!admin) {
    return NextResponse.json(
      { success: false, error: { code: "UNAUTHORIZED", message: "Admin token required" } },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const validationResult = projectSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: validationResult.error.issues[0]?.message || "Validation failed",
            details: validationResult.error.issues,
          },
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    const newProject = memoryStore.addProject({
      id: `proj-${Date.now()}`,
      title: data.title,
      slug: data.slug,
      industry: data.industry,
      industryLabel: data.industry.replace("_", " "),
      summary: data.summary,
      problem: data.problem,
      solution: data.solution,
      result: data.result,
      clientName: data.clientName || "",
      year: data.year,
      techStack: data.techStack,
      coverImage: data.coverImage.url,
      gallery: data.gallery.map((g) => g.url),
      liveUrl: data.liveUrl,
      featured: data.featured,
      isSample: false,
    });

    return NextResponse.json(
      {
        success: true,
        data: newProject,
        message: "Project created successfully.",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST /projects error:", error);
    return NextResponse.json(
      {
        success: false,
        error: { code: "SERVER_ERROR", message: error?.message || "Failed to create project." },
      },
      { status: 500 }
    );
  }
}
