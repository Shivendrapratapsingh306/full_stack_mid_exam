import { NextResponse } from "next/server";
import { clearAdminCookie } from "@/lib/jwt";

export async function POST() {
  await clearAdminCookie();
  return NextResponse.json({
    success: true,
    message: "Admin session logged out successfully.",
  });
}
