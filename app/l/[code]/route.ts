// Redirect handler with click tracking

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// Hash IP for privacy
function hashIP(ip: string): string {
  const salt = process.env.IP_HASH_SALT || "nfl-live-hub-salt";
  return crypto
    .createHash("sha256")
    .update(ip + salt)
    .digest("hex")
    .slice(0, 16);
}

// Parse user agent for device info
function parseUserAgent(ua: string): {
  deviceType: string;
  browser: string;
  os: string;
} {
  const result = {
    deviceType: "desktop",
    browser: "unknown",
    os: "unknown",
  };

  if (!ua) return result;

  const uaLower = ua.toLowerCase();

  // Device type
  if (
    uaLower.includes("mobile") ||
    (uaLower.includes("android") && !uaLower.includes("tablet"))
  ) {
    result.deviceType = "mobile";
  } else if (uaLower.includes("tablet") || uaLower.includes("ipad")) {
    result.deviceType = "tablet";
  } else if (uaLower.includes("chrome-extension") || uaLower.includes("crx")) {
    result.deviceType = "extension";
  }

  // Browser
  if (uaLower.includes("firefox")) {
    result.browser = "Firefox";
  } else if (uaLower.includes("edg/")) {
    result.browser = "Edge";
  } else if (uaLower.includes("chrome")) {
    result.browser = "Chrome";
  } else if (uaLower.includes("safari")) {
    result.browser = "Safari";
  } else if (uaLower.includes("opera") || uaLower.includes("opr/")) {
    result.browser = "Opera";
  }

  // OS
  if (uaLower.includes("windows")) {
    result.os = "Windows";
  } else if (uaLower.includes("mac os") || uaLower.includes("macos")) {
    result.os = "macOS";
  } else if (uaLower.includes("linux")) {
    result.os = "Linux";
  } else if (uaLower.includes("android")) {
    result.os = "Android";
  } else if (
    uaLower.includes("ios") ||
    uaLower.includes("iphone") ||
    uaLower.includes("ipad")
  ) {
    result.os = "iOS";
  }

  return result;
}

// Get geo data from headers (Vercel/Cloudflare provide these)
function getGeoData(request: NextRequest): {
  country: string | null;
  region: string | null;
  city: string | null;
} {
  return {
    country:
      request.headers.get("x-vercel-ip-country") ||
      request.headers.get("cf-ipcountry") ||
      null,
    region:
      request.headers.get("x-vercel-ip-country-region") ||
      request.headers.get("cf-region") ||
      null,
    city:
      request.headers.get("x-vercel-ip-city") ||
      request.headers.get("cf-ipcity") ||
      null,
  };
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code } = await params;

  try {
    // Fetch the link
    const { data: link, error } = await supabase
      .from("links")
      .select("id, original_url, is_active, expires_at")
      .eq("short_code", code)
      .single();

    if (error || !link) {
      // Redirect to 404 or homepage
      return NextResponse.redirect(new URL("/not-found", request.url));
    }

    // Check if link is active
    if (!link.is_active) {
      return NextResponse.redirect(new URL("/link-expired", request.url));
    }

    // Check expiration
    if (link.expires_at && new Date(link.expires_at) < new Date()) {
      return NextResponse.redirect(new URL("/link-expired", request.url));
    }

    // Get tracking data
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "";
    const referer = request.headers.get("referer") || null;
    const geo = getGeoData(request);
    const deviceInfo = parseUserAgent(userAgent);

    // Record the click (fire and forget - don't wait)
    supabase
      .from("link_clicks")
      .insert({
        link_id: link.id,
        ip_hash: hashIP(ip),
        user_agent: userAgent.slice(0, 500), // Truncate
        referer: referer?.slice(0, 500) || null,
        country: geo.country,
        region: geo.region,
        city: geo.city,
        device_type: deviceInfo.deviceType,
        browser: deviceInfo.browser,
        os: deviceInfo.os,
      })
      .then(({ error }) => {
        if (error) console.error("Error recording click:", error);
      });

    // Redirect to original URL
    return NextResponse.redirect(link.original_url, { status: 302 });
  } catch (error) {
    console.error("Error in redirect:", error);
    return NextResponse.redirect(new URL("/", request.url));
  }
}
