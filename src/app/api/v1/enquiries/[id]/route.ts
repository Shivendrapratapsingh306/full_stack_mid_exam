import { NextResponse } from "next/server";
import { getAdminFromCookie } from "@/lib/jwt";
import { memoryStore, StoredEnquiry } from "@/lib/store";

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
    const { status } = await request.json();
    if (!["NEW", "READ", "REPLIED", "ARCHIVED"].includes(status)) {
      return NextResponse.json(
        { success: false, error: { code: "VALIDATION_ERROR", message: "Invalid status value" } },
        { status: 400 }
      );
    }

    const updated = memoryStore.updateEnquiryStatus(id, status as StoredEnquiry["status"]);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: { code: "NOT_FOUND", message: "Enquiry not found" } },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updated,
      message: `Enquiry marked as ${status}.`,
    });
  } catch (error) {
    console.error("PATCH /enquiries/:id error:", error);
    return NextResponse.json(
      { success: false, error: { code: "SERVER_ERROR", message: "Failed to update enquiry." } },
      { status: 500 }
    );
  }
}
