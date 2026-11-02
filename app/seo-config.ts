import type { Metadata } from "next";

function getVerifiedSiteOrigin(): URL | undefined {
  const configuredUrl = process.env.SITE_URL?.trim();
  if (!configuredUrl) return undefined;

  try {
    const url = new URL(configuredUrl);
    const hostname = url.hostname.toLowerCase();
    const previewHosts = [
      "vercel.app",
      "netlify.app",
      "pages.dev",
      "web.app",
      "firebaseapp.com",
      "onrender.com",
      "fly.dev",
      "ngrok-free.app",
    ];
    const reservedHost =
      hostname === "localhost" ||
      hostname.endsWith(".localhost") ||
      hostname.endsWith(".local") ||
      hostname.endsWith(".test") ||
      hostname.endsWith(".invalid") ||
      hostname.endsWith(".example") ||
      hostname === "example.com" ||
      hostname === "example.org" ||
      hostname === "example.net" ||
      previewHosts.some((host) => hostname === host || hostname.endsWith(`.${host}`));

    if (
      url.protocol !== "https:" ||
      !hostname.includes(".") ||
      reservedHost ||
      url.username ||
      url.password ||
      url.port ||
      url.pathname !== "/" ||
      url.search ||
      url.hash
    ) {
      return undefined;
    }

    return new URL(url.origin);
  } catch {
    return undefined;
  }
}

export const siteOrigin = getVerifiedSiteOrigin();
export const metadataBase = siteOrigin;

const vercelProduction = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";
const explicitProduction = !process.env.SITE_DEPLOYMENT_ENV || process.env.SITE_DEPLOYMENT_ENV === "production";

export const indexingEnabled =
  process.env.NODE_ENV === "production" &&
  process.env.SITE_INDEXING_ENABLED === "true" &&
  vercelProduction &&
  explicitProduction &&
  Boolean(siteOrigin);

export const robotsMetadata: NonNullable<Metadata["robots"]> = indexingEnabled
  ? { index: true, follow: true }
  : { index: false, follow: false };

export function alternatesFor(path: string): Metadata["alternates"] {
  return siteOrigin ? { canonical: new URL(path, siteOrigin) } : undefined;
}
