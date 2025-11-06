import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, honeypot } = body;
    
    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      return NextResponse.json({ message: "Submitted successfully" }, { status: 200 }); // Fake success response
    }

    // Input validation
    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    const safeEmail = email.trim().toLowerCase();

    // Nodemailer Transporter Configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_EMAIL_PASS,
      },
    });

    // Email Content
    const subscriberMailOptions = {
      from: `"Cybervists Alert" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
      to: safeEmail,
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
      to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
      subject: "New Newsletter Subscription",
      html: `
          <h2>New subscriber alert!</h2>
          <p>Email: ${safeEmail}</p>
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
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
