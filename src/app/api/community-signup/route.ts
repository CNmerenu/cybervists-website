import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface CommunitySignupData {
  fullName: string;
  email: string;
  pronoun: string;
  techSkill: string;
  interests: string[];
  otherInterest?: string;
  hasExperience: string;
  certifications: string[];
  otherCertification?: string;
  wantsCertifications?: string;
  stemExperience: string;
  volunteerHours: string;
  otherHours?: string;
  preferredTimes: string[];
  comfortableWithDiverse: string;
  consent: boolean;
  companyName?: string;
}

// Input validation and sanitization
function validateAndSanitizeInput(data: CommunitySignupData) {
  const {
    fullName,
    email,
    pronoun,
    techSkill,
    interests,
    otherInterest,
    hasExperience,
    certifications,
    otherCertification,
    wantsCertifications,
    stemExperience,
    volunteerHours,
    otherHours,
    preferredTimes,
    comfortableWithDiverse,
    consent,
  } = data;

  // Basic validation
  if (
    !fullName ||
    !email ||
    !pronoun ||
    !techSkill ||
    !hasExperience ||
    !stemExperience ||
    !volunteerHours ||
    !comfortableWithDiverse ||
    !consent
  ) {
    throw new Error("Required fields are missing");
  }

  if (!interests || interests.length === 0 || interests.length > 2) {
    throw new Error("Please select 1-2 areas of interest");
  }

  if (!certifications || certifications.length === 0) {
    throw new Error("Please select at least one certification option");
  }

  if (!preferredTimes || preferredTimes.length === 0) {
    throw new Error("Please select at least one preferred time");
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }

  // Sanitize inputs (basic XSS prevention)
  const sanitizedData = {
    fullName: fullName.toString().trim().slice(0, 100),
    email: email.toString().trim().toLowerCase().slice(0, 100),
    pronoun: pronoun.toString().trim().slice(0, 50),
    techSkill: techSkill.toString().trim().slice(0, 200),
    interests: interests.map((i: string) => i.toString().trim().slice(0, 100)),
    otherInterest: otherInterest
      ? otherInterest.toString().trim().slice(0, 200)
      : "",
    hasExperience: hasExperience.toString().trim(),
    certifications: certifications.map((c: string) =>
      c.toString().trim().slice(0, 100)
    ),
    otherCertification: otherCertification
      ? otherCertification.toString().trim().slice(0, 200)
      : "",
    wantsCertifications: wantsCertifications
      ? wantsCertifications.toString().trim()
      : "",
    stemExperience: stemExperience.toString().trim(),
    volunteerHours: volunteerHours.toString().trim(),
    otherHours: otherHours ? otherHours.toString().trim().slice(0, 10) : "",
    preferredTimes: preferredTimes.map((t: string) =>
      t.toString().trim().slice(0, 50)
    ),
    comfortableWithDiverse: comfortableWithDiverse.toString().trim(),
  };

  return sanitizedData;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Honeypot check - if filled, it's likely a bot
    if (body.companyName) {
      return NextResponse.json({ success: true }); // Fake success response
    }
    
    const sanitizedData = validateAndSanitizeInput(body);

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_EMAIL_PASS,
      },
    });

    // Format lists for display
    const formatList = (items: string[], otherValue?: string) => {
      const formatted = items.filter((item) => item !== "Other").join(", ");
      if (items.includes("Other") && otherValue) {
        return formatted
          ? `${formatted}, Other: ${otherValue}`
          : `Other: ${otherValue}`;
      }
      return formatted;
    };

    // Email to admin
    const adminMailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
      subject: "New Community Volunteer Signup - Cybervists",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Community Volunteer Signup</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Personal Information</h3>
            <p><strong>Full Name:</strong> ${sanitizedData.fullName}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Preferred Pronoun:</strong> ${sanitizedData.pronoun}</p>
            
            <h3>Technical Background</h3>
            <p><strong>Tech Skill Level:</strong> ${sanitizedData.techSkill}</p>
            <p><strong>Areas of Interest:</strong> ${formatList(
              sanitizedData.interests,
              sanitizedData.otherInterest
            )}</p>
            <p><strong>Has Experience in Interest Areas:</strong> ${
              sanitizedData.hasExperience
            }</p>
            <p><strong>Certifications:</strong> ${formatList(
              sanitizedData.certifications,
              sanitizedData.otherCertification
            )}</p>
            <p><strong>Wants Future Certifications:</strong> ${
              sanitizedData.wantsCertifications || "Not specified"
            }</p>
            <p><strong>IT/STEM Experience:</strong> ${
              sanitizedData.stemExperience
            }</p>
            
            <h3>Volunteer Availability</h3>
            <p><strong>Hours per Week:</strong> ${
              sanitizedData.volunteerHours
            }${
        sanitizedData.otherHours ? ` (${sanitizedData.otherHours} hours)` : ""
      }</p>
            <p><strong>Preferred Times:</strong> ${sanitizedData.preferredTimes.join(
              ", "
            )}</p>
            <p><strong>Comfortable with Diverse Groups:</strong> ${
              sanitizedData.comfortableWithDiverse
            }</p>
            
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: sanitizedData.email,
      subject: "Welcome to Cybervists Volunteer Community!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Welcome to Cybervists, ${
            sanitizedData.fullName
          }!</h2>
          <p>Thank you for your interest in volunteering with our community. We're excited to have you on board!</p>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Your expertise in <strong>${formatList(
              sanitizedData.interests,
              sanitizedData.otherInterest
            )}</strong> will be invaluable to our mission of promoting cyber awareness, ethical use, and digital inclusion.</p>
          </div>
          <p>Our team will review your application and be in touch soon with next steps and volunteer opportunities that match your skills and availability.</p>
          <p>In the meantime, feel free to follow our upcoming events and activities.</p>
          <p>Best regards,<br>The Cybervists Team</p>
        </div>
      `,
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Community signup error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to process signup",
      },
      { status: 500 }
    );
  }
}
