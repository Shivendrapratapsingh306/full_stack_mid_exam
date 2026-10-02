import { NextResponse } from "next/server";
import { getAdminFromCookie } from "@/lib/jwt";
import { memoryStore } from "@/lib/store";

interface ParamsProps {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: Request, { params }: ParamsProps) {
  const admin = await getAdminFromCookie();
  if (!admin) {
    return NextResponse.json(
      { success: false, error: { code: "UNAUTHORIZED", message: "Admin authorization required" } },
      { status: 401 }
    );
  }

  const { id } = await params;

  try {
    const body = await request.json();
    const updated = memoryStore.updateProject(id, body);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: { code: "NOT_FOUND", message: "Project not found" } },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updated,
      message: "Project updated successfully.",
    });
  } catch (error) {
    console.error("PATCH /projects/:id error:", error);
    return NextResponse.json(
      { success: false, error: { code: "SERVER_ERROR", message: "Failed to update project." } },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: ParamsProps) {
  const admin = await getAdminFromCookie();
  if (!admin) {
    return NextResponse.json(
      { success: false, error: { code: "UNAUTHORIZED", message: "Admin authorization required" } },
      { status: 401 }
    );
  }

  const { id } = await params;

  try {
    const success = memoryStore.deleteProject(id);
    if (!success) {
      return NextResponse.json(
        { success: false, error: { code: "NOT_FOUND", message: "Project not found" } },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Project deleted successfully.",
    });
  } catch (error) {
    console.error("DELETE /projects/:id error:", error);
    return NextResponse.json(
      { success: false, error: { code: "SERVER_ERROR", message: "Failed to delete project." } },
      { status: 500 }
    );
  }
}
