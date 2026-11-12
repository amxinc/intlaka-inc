import { NextResponse, type NextRequest } from "next/server";

const PREFIXED = ["ar", "fr"];

// English lives at the root (`/about`); Arabic and French are prefixed (`/ar/about`, `/fr/about`).
// Internally every page is under `app/[lang]`, so unprefixed paths are rewritten to `/en/...`.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (PREFIXED.includes(first)) return NextResponse.next();

  // `/en/...` is reachable only through the unprefixed URL, so there is a single canonical address.
  if (first === "en") {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes and any file with an extension (images, icons, sitemap.xml, robots.txt).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
