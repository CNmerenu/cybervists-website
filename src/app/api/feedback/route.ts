"use server";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      role,
      experience,
      supportLevel,
      supportType,
      feedback,
      futureEngagement,
      rating,
    } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_ADMIN_USER,
      subject: `Feedback: ${name} (${rating}/5 stars)`,
      html: `
        <h3>New Feedback Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Support Level:</strong> ${supportLevel.join(", ")}</p>
        <p><strong>Support Type:</strong> ${supportType.join(", ")}</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
        <p><strong>Future Engagement:</strong> ${futureEngagement}</p>
        <p><strong>Rating:</strong> ${rating}/5 stars</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send feedback" },
      { status: 500 }
    );
  }
}
