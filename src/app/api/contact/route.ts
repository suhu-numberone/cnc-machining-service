import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Input validation schema
const contactSchema = z.object({
  firstName: z.string().min(1).max(100).trim(),
  companyName: z.string().max(200).trim().optional().default(""),
  email: z.string().email().max(254).toLowerCase(),
  phone: z.string().max(50).optional().default(""),
  businessNeeds: z.string().min(1).max(200).trim(),
  projectDescription: z.string().min(10).max(5000).trim(),
  attachments: z.array(z.object({
    url: z.string().url(),
    filename: z.string().max(255),
  })).optional().default([]),
  tracking: z.object({
    landingPage: z.string(),
    landingTime: z.string(),
    referrer: z.string(),
    visitPath: z.array(z.object({
      page: z.string(),
      timestamp: z.string(),
    })),
  }).nullable().optional(),
});

// Sanitize string for HTML email (prevent injection)
function sanitizeForHTML(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();

    // Validate and parse input
    const parseResult = contactSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parseResult.error.flatten() },
        { status: 400 }
      );
    }

    const { firstName, companyName, email, phone, businessNeeds, projectDescription, attachments, tracking } = parseResult.data;

    // Sanitize all user input for HTML email
    const safeFirstName = sanitizeForHTML(firstName);
    const safeCompanyName = sanitizeForHTML(companyName || "Not provided");
    const safeEmail = sanitizeForHTML(email);
    const safePhone = sanitizeForHTML(phone || "Not provided");
    const safeBusinessNeeds = sanitizeForHTML(businessNeeds);
    const safeProjectDescription = sanitizeForHTML(projectDescription);

    // Send email to ApexBatch team
    const { data, error } = await resend.emails.send({
      from: "ApexBatch Quotes <quotes@apexbatch.com>",
      to: ["info@apexbatch.com"], // Your receiving email
      replyTo: email,
      subject: `New Quote Request: ${businessNeeds}${companyName ? ` - ${companyName}` : ` from ${firstName}`}`,
      attachments: attachments.length > 0 ? attachments.map(att => ({
        path: att.url,
        filename: att.filename,
      })) : undefined,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #D09947 0%, #EEC569 100%); padding: 24px; text-align: center;">
            <h1 style="color: #000; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>

          <div style="background: #1a1a1a; padding: 32px; color: #fff;">
            <h2 style="color: #EEC569; margin-top: 0; font-size: 18px;">Contact Information</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #888; width: 140px;">Name:</td>
                <td style="padding: 8px 0; color: #fff;">${safeFirstName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888;">Company:</td>
                <td style="padding: 8px 0; color: #fff;">${safeCompanyName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888;">Email:</td>
                <td style="padding: 8px 0; color: #fff;"><a href="mailto:${safeEmail}" style="color: #D09947;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888;">Phone:</td>
                <td style="padding: 8px 0; color: #fff;">${safePhone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888;">Service Needed:</td>
                <td style="padding: 8px 0; color: #EEC569; font-weight: bold;">${safeBusinessNeeds}</td>
              </tr>
            </table>

            <h2 style="color: #EEC569; margin-top: 32px; font-size: 18px;">Project Description</h2>
            <div style="background: #2a2a2a; padding: 16px; border-radius: 8px; border-left: 4px solid #D09947;">
              <p style="margin: 0; color: #C5C6C9; line-height: 1.6; white-space: pre-wrap;">${safeProjectDescription}</p>
            </div>
            ${attachments.length > 0 ? `
            <h2 style="color: #EEC569; margin-top: 32px; font-size: 18px;">Attachments (${attachments.length})</h2>
            <div style="background: #2a2a2a; padding: 16px; border-radius: 8px; border-left: 4px solid #D09947;">
              <ul style="margin: 0; padding-left: 20px; color: #C5C6C9;">
                ${attachments.map(att => `<li><a href="${sanitizeForHTML(att.url)}" style="color: #D09947;">${sanitizeForHTML(att.filename)}</a></li>`).join('')}
              </ul>
            </div>
            ` : ''}
            ${tracking ? `
            <h2 style="color: #EEC569; margin-top: 32px; font-size: 18px;">Visitor Journey</h2>
            <div style="background: #2a2a2a; padding: 16px; border-radius: 8px; border-left: 4px solid #D09947;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; color: #888; width: 120px;">Referrer:</td>
                  <td style="padding: 6px 0; color: #C5C6C9;">${sanitizeForHTML(tracking.referrer)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #888;">Landing Page:</td>
                  <td style="padding: 6px 0; color: #D09947;">${sanitizeForHTML(tracking.landingPage)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #888;">Landing Time:</td>
                  <td style="padding: 6px 0; color: #C5C6C9;">${new Date(tracking.landingTime).toLocaleString()}</td>
                </tr>
              </table>
              <p style="color: #888; margin: 16px 0 8px 0; font-size: 13px;">Pages Visited (${tracking.visitPath.length}):</p>
              <ol style="margin: 0; padding-left: 20px; color: #C5C6C9; font-size: 13px;">
                ${tracking.visitPath.map(v => `<li style="margin-bottom: 4px;"><span style="color: #D09947;">${sanitizeForHTML(v.page)}</span></li>`).join('')}
              </ol>
            </div>
            ` : ''}
          </div>

          <div style="background: #0d0d0d; padding: 16px; text-align: center;">
            <p style="color: #666; margin: 0; font-size: 12px;">
              This email was sent from the ApexBatch contact form
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Optionally send confirmation email to the user
    await resend.emails.send({
      from: "ApexBatch <quotes@apexbatch.com>",
      to: [email],
      subject: "We received your inquiry - ApexBatch",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #D09947 0%, #EEC569 100%); padding: 24px; text-align: center;">
            <h1 style="color: #000; margin: 0; font-size: 24px;">Thank You for Contacting Us</h1>
          </div>

          <div style="background: #1a1a1a; padding: 32px; color: #fff;">
            <p style="color: #C5C6C9; font-size: 16px; line-height: 1.6;">
              Hi ${safeFirstName},
            </p>
            <p style="color: #C5C6C9; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out to ApexBatch. We've received your inquiry about <strong style="color: #EEC569;">${safeBusinessNeeds}</strong> and our engineering team will review your requirements.
            </p>
            <p style="color: #C5C6C9; font-size: 16px; line-height: 1.6;">
              You can expect to hear from us within <strong style="color: #fff;">24 business hours</strong>.
            </p>

            <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; margin-top: 24px;">
              <h3 style="color: #EEC569; margin-top: 0; font-size: 16px;">What happens next?</h3>
              <ul style="color: #C5C6C9; padding-left: 20px; line-height: 1.8;">
                <li>Our team will review your project requirements</li>
                <li>We'll prepare a detailed quote and DFM analysis</li>
                <li>A dedicated engineer will reach out to discuss your project</li>
              </ul>
            </div>

            <p style="color: #C5C6C9; font-size: 16px; line-height: 1.6; margin-top: 24px;">
              If you have any urgent questions, feel free to reach us directly:
            </p>
            <p style="color: #D09947; font-size: 16px;">
              <strong>Phone/WhatsApp:</strong> +86 13302480516<br>
              <strong>Email:</strong> info@apexbatch.com
            </p>
          </div>

          <div style="background: #0d0d0d; padding: 16px; text-align: center;">
            <p style="color: #666; margin: 0; font-size: 12px;">
              ApexBatch - Precision Manufacturing Excellence<br>
              Shenzhen, Guangdong, China
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    // Log error without exposing details
    if (process.env.NODE_ENV === "development") {
      console.error("Contact form error:", error);
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
