import { NextResponse } from "next/server";
import { getAdminFromCookie } from "@/lib/jwt";
import { memoryStore } from "@/lib/store";

export async function GET() {
  const admin = await getAdminFromCookie();
  if (!admin) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "UNAUTHORIZED",
          message: "Authorization token required to access enquiries.",
        },
      },
      { status: 401 }
    );
  }

  const enquiries = memoryStore.getEnquiries();

  return NextResponse.json({
    success: true,
    data: enquiries,
    total: enquiries.length,
  });
}
