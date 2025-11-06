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

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, honeypot } = body;
    
    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      return NextResponse.json({ success: true }); // Fake success response
    }

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (name.length > 100 || message.length > 1000) {
      return NextResponse.json({ error: "Input too long" }, { status: 400 });
    }

    // Sanitize inputs
    const safeName = sanitizeInput(name.trim());
    const safeEmail = email.trim().toLowerCase();
    const safeMessage = sanitizeInput(message.trim());

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_EMAIL_PASS,
      },
    });

    // Send to admin
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
      subject: `Contact Form: ${safeName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong> ${safeMessage}</p>
      `,
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: safeEmail,
      subject: "Thank you for contacting Cybervists",
      html: `
        <h3>Thank you for reaching out!</h3>
        <p>Hi ${safeName},</p>
        <p>We have received your message and will get back to you soon.</p>
        <p>Best regards,<br/>Cybervists Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
