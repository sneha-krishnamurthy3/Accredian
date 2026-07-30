import { NextResponse } from "next/server";
import { z } from "zod";

// Zod Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().regex(/^\+?[0-9\s\-()]{7,15}$/, "Please enter a valid phone number (7-15 digits)."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

// Mock database in-memory storage
const submissions: Array<z.infer<typeof contactSchema> & { id: string; timestamp: string }> = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Parse & Validate using Zod
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      // Format validation errors
      const formattedErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          formattedErrors[err.path[0].toString()] = err.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors: formattedErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = result.data;

    // Save submission temporarily (mock database)
    const newSubmission = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    };

    submissions.push(newSubmission);
    console.log("New contact submission added in memory:", newSubmission);

    return NextResponse.json(
      {
        success: true,
        message: `Thank you ${name}, your inquiry has been submitted successfully!`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error inside POST /api/contact:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Failed to process your submission.",
      },
      { status: 500 }
    );
  }
}
