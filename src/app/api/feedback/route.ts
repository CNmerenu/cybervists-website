import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function sanitizeInput(input: string): string {
  return input.replace(/[<>"'&]/g, (match) => {
    const entities: { [key: string]: string } = {
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "&": "&amp;",
    };
    return entities[match];
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      role,
      experience,
      supportLevel,
      supportType,
      feedback,
      futureEngagement,
      rating,
      website,
    } = body;
    
    // Honeypot check - if filled, it's likely a bot
    if (website) {
      return NextResponse.json({ success: true }); // Fake success response
    }

    // Input validation
    if (!name || !role || !feedback || !rating) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    if (typeof rating !== "number" || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Invalid rating" }, { status: 400 });
    }

    if (name.length > 100 || feedback.length > 2000) {
      return NextResponse.json({ error: "Input too long" }, { status: 400 });
    }

    // Sanitize inputs
    const safeName = sanitizeInput(name.trim());
    const safeRole = sanitizeInput(role.trim());
    const safeExperience = experience ? sanitizeInput(experience.trim()) : "";
    const safeFeedback = sanitizeInput(feedback.trim());
    const safeFutureEngagement = futureEngagement
      ? sanitizeInput(futureEngagement.trim())
      : "";
    const safeSupportLevel = Array.isArray(supportLevel)
      ? supportLevel.map((item) => sanitizeInput(item))
      : [];
    const safeSupportType = Array.isArray(supportType)
      ? supportType.map((item) => sanitizeInput(item))
      : [];

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
      subject: `Feedback: ${safeName} (${rating}/5 stars)`,
      html: `
        <h3>New Feedback Submission</h3>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Role:</strong> ${safeRole}</p>
        <p><strong>Experience:</strong> ${safeExperience}</p>
        <p><strong>Support Level:</strong> ${safeSupportLevel.join(", ")}</p>
        <p><strong>Support Type:</strong> ${safeSupportType.join(", ")}</p>
        <p><strong>Feedback:</strong> ${safeFeedback}</p>
        <p><strong>Future Engagement:</strong> ${safeFutureEngagement}</p>
        <p><strong>Rating:</strong> ${rating}/5 stars</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Feedback form error:", error);
    return NextResponse.json(
      { error: "Failed to send feedback" },
      { status: 500 }
    );
  }
}
