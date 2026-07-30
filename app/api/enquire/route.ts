import { NextResponse } from "next/server";
import { z } from "zod";

// Zod Validation Schema
const enquireSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().regex(/^\+?[0-9\s\-()]{7,15}$/, "Please enter a valid phone number (7-15 digits)."),
  company: z.string().min(1, "Company name is required."),
  courseDomain: z.string().min(1, "Course domain is required."),
  candidates: z.preprocess(
    (val) => (typeof val === "string" ? parseInt(val, 10) : val),
    z.number().positive("Number of candidates must be greater than 0.")
  ),
  mode: z.enum(["Online", "Offline"]),
  location: z.string().min(1, "Location is required.").refine(
    (val) => !/^\d+$/.test(val.trim()),
    "Location cannot be a number."
  ),
});

// Mock database in-memory storage for lead captures
const enquiries: Array<z.infer<typeof enquireSchema> & { id: string; timestamp: string }> = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Parse & Validate using Zod
    const result = enquireSchema.safeParse(body);

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

    const data = result.data;

    // Simulate database latency
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Save submission temporarily (mock database)
    const newEnquiry = {
      id: Math.random().toString(36).substring(2, 9),
      ...data,
      timestamp: new Date().toISOString(),
    };

    enquiries.push(newEnquiry);
    console.log("New Accredian Corporate Enquiry added in memory:", newEnquiry);

    return NextResponse.json(
      {
        success: true,
        message: `Thank you ${data.name}! Your corporate enquiry has been successfully logged. Our L&D Advisor will contact you shortly.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error inside POST /api/enquire:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Failed to process your enquiry.",
      },
      { status: 500 }
    );
  }
}
