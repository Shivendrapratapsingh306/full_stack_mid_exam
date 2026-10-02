import { NextResponse } from "next/server";
import { loginSchema } from "@/validators/auth.schema";
import { signToken, setAdminCookie } from "@/lib/jwt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validationResult = loginSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Invalid email or password format.",
          },
        },
        { status: 400 }
      );
    }

    const { email, password } = validationResult.data;

    // Default admin validation: admin@demo.com / Admin@123 or admin@angaarlabs.dev
    const isValidAdmin =
      (email.toLowerCase() === "admin@demo.com" || email.toLowerCase() === "admin@angaarlabs.dev") &&
      password === "Admin@123";

    if (!isValidAdmin) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "INVALID_CREDENTIALS",
            message: "Invalid admin email or password.",
          },
        },
        { status: 401 }
      );
    }

    const token = signToken({
      userId: "admin-1",
      email: email.toLowerCase(),
      role: "ADMIN",
    });

    await setAdminCookie(token);

    return NextResponse.json({
      success: true,
      data: {
        id: "admin-1",
        name: "Angaar Admin",
        email: email.toLowerCase(),
        role: "ADMIN",
      },
      message: "Admin authentication successful.",
    });
  } catch (error) {
    console.error("Auth login error:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "SERVER_ERROR",
          message: "Internal server error during authentication.",
        },
      },
      { status: 500 }
    );
  }
}
