import { NextResponse } from "next/server";
import { getAdminFromCookie } from "@/lib/jwt";

export async function GET() {
  const admin = await getAdminFromCookie();
  if (!admin) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "UNAUTHORIZED",
          message: "No active admin session found.",
        },
      },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    data: admin,
  });
}
