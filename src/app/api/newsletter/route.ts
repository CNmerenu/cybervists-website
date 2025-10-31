"use server";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }
  const body = await new Response(req.body).json();

  const { email } = body;

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  try {
    // Nodemailer Transporter Configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    // Email Content
    const subscriberMailOptions = {
      from: `"Cybervists Alert" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
      to: email,
      subject: "Welcome to Cybervists Newsletter!",
      html: `
        <h2>Thank You for subscribing to our Newsletter</h2>
        <p>Stay tuned for periodic updates on cybersecurity.</p>
        <p>Best regards, <br/>Cybervists Team</p>
      `,
    };
    // Email Content
    const adminMailOptions = {
      from: `"WebAdmin" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_ADMIN_USER,
      subject: "New Newsletter Subscription",
      html: `
          <h2>New subcriber alert!</h2>
          <p>Email: ${email},</p>
          <p>Please take note.</p>
          <p>Best regards, <br/>Web Admin</p>
        `,
    };

    // Send Email Subscriber
    await transporter.sendMail(subscriberMailOptions);

    // Send Email Admin
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json(
      { message: "Submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
