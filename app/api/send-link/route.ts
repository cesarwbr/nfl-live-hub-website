import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const storeUrl =
      "https://chromewebstore.google.com/detail/nfl-live-hub-scores-stats/djfgoccgbpkgoejomjbadfppighhikhh";
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://nfllivehub.com";
    const from =
      process.env.RESEND_FROM_EMAIL || "NFL Live Hub <onboarding@resend.dev>";
    const replyTo = process.env.RESEND_REPLY_TO || "contact@nfllivehub.com";

    const subject = "NFL Live Hub — Your install link";
    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111;">
        <h1 style="margin: 0 0 12px; font-size: 20px;">NFL Live Hub</h1>
        <p style="margin: 0 0 16px; color: #444;">Thanks for your interest! Click below to install the Chrome extension.</p>
        <p style="margin: 0 0 20px;">
          <a href="${storeUrl}" style="display:inline-block; background:#2563EB; color:#fff; text-decoration:none; padding:10px 16px; border-radius:10px; font-weight:600;">Open Chrome Web Store</a>
        </p>
        <p style="margin: 0 0 8px; color: #666;">If the button doesn't work, copy and paste this URL:</p>
        <p style="word-break: break-all; margin: 0 0 20px; color:#1d4ed8;">
          ${storeUrl}
        </p>
        <hr style="border:none; border-top:1px solid #eee; margin: 20px 0;">
        <p style="margin: 0; color:#666;">From NFL Live Hub • <a href="${siteUrl}" style="color:#1d4ed8; text-decoration:none;">${siteUrl}</a></p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from,
      to: [email],
      subject,
      html,
      replyTo,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || "Failed to send" },
        { status: 500 }
      );
    }

    return NextResponse.json({ id: data?.id ?? null }, { status: 200 });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unexpected error occurred";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
