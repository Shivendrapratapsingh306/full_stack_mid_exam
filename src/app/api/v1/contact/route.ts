import { NextResponse } from "next/server";
import { contactFormSchema } from "@/validators/contact.schema";
import { checkRateLimit } from "@/lib/rateLimit";
import { memoryStore } from "@/lib/store";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    if (!checkRateLimit(ip, 5, 60 * 1000)) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "TOO_MANY_REQUESTS",
            message: "Too many contact enquiries. Please wait a minute before submitting again.",
          },
        },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "INVALID_JSON",
            message: "Invalid JSON format in request body.",
          },
        },
        { status: 400 }
      );
    }

    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const details = validationResult.error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      }));

      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: validationResult.error.issues[0]?.message || "Validation failed",
            details,
          },
        },
        { status: 400 }
      );
    }

    const validData = validationResult.data;
    const newEnquiry = memoryStore.addEnquiry({
      name: validData.name,
      email: validData.email,
      company: validData.company || "",
      budget: validData.budget,
      service: validData.service,
      message: validData.message,
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          id: newEnquiry._id,
          name: newEnquiry.name,
          email: newEnquiry.email,
          createdAt: newEnquiry.createdAt,
        },
        message: "Thanks! We've received your enquiry and will get back within 24 hours.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API /contact error:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "SERVER_ERROR",
          message: "An internal server error occurred while processing your enquiry.",
        },
      },
      { status: 500 }
    );
  }
}
