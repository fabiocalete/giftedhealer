import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/site.config";
import { isValidEmail, isValidPhone } from "@/lib/validation";

const { email: emailConfig } = siteConfig;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  const { firstName, lastName, email, phone, message } = body;

  if (!email || !phone || !message) {
    return NextResponse.json(
      { error: "Email, phone, and message are required" },
      { status: 400 },
    );
  }

  if (typeof email !== "string" || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 },
    );
  }

  if (typeof phone !== "string" || !isValidPhone(phone)) {
    return NextResponse.json(
      { error: "Please enter a valid phone number" },
      { status: 400 },
    );
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!fromEmail || !toEmail) {
    return NextResponse.json(
      { error: "Server email configuration missing" },
      { status: 500 },
    );
  }

  const fullName = [firstName, lastName].filter(Boolean).join(" ") || "Unknown";
  const subject = emailConfig.subjectTemplate.replace("{name}", fullName);
  const replyFooter = emailConfig.replyFooter.replace("{name}", fullName);
  const labels = emailConfig.fieldLabels;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="margin-top: 0;">${subject}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #555; width: 120px;">${labels.firstName}</td>
              <td style="padding: 8px 0;">${firstName || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555;">${labels.lastName}</td>
              <td style="padding: 8px 0;">${lastName || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555;">${labels.email}</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555;">${labels.phone}</td>
              <td style="padding: 8px 0;">${phone || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; vertical-align: top;">${labels.message}</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #888; font-size: 12px;">
            ${replyFooter}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 },
    );
  }
}
