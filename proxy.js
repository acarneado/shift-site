import { NextResponse } from "next/server";

// Coupe-circuit manuel : mettre MAINTENANCE_MODE=true dans les variables
// d'environnement Vercel (puis redéployer) pour afficher une page "en
// construction" sur tout le site sans toucher au code ni au domaine.
// robots.txt et sitemap.xml restent accessibles pour ne pas casser le
// crawl une fois le mode désactivé.
const MAINTENANCE_PATH = "/maintenance";
const BYPASS_PATHS = [MAINTENANCE_PATH, "/robots.txt", "/sitemap.xml"];

export function proxy(request) {
  if (process.env.MAINTENANCE_MODE !== "true") {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  if (BYPASS_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = MAINTENANCE_PATH;
  return NextResponse.rewrite(url, { status: 503 });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
