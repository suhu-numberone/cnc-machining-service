import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const EXCLUDED_DIRS = new Set(["admin", "api", "blog"]);

function discoverRoutes(appDir: string): string[] {
  const routes: string[] = [];

  function scan(dir: string, routePath: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    const hasPage = entries.some(
      (e) => e.isFile() && (e.name === "page.tsx" || e.name === "page.ts")
    );

    if (hasPage) {
      routes.push(routePath || "/");
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (EXCLUDED_DIRS.has(entry.name)) continue;
      if (entry.name.startsWith("[")) continue;
      if (entry.name.startsWith("_")) continue;

      scan(path.join(dir, entry.name), `${routePath}/${entry.name}`);
    }
  }

  scan(appDir, "");
  return routes.sort();
}

function slugToName(slug: string): string {
  if (slug === "/") return "Home";
  return slug
    .replace(/^\//, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function GET() {
  const appDir = path.join(process.cwd(), "src", "app");
  const routes = discoverRoutes(appDir);

  const pages = routes.map((slug) => ({
    slug,
    name: slugToName(slug),
  }));

  return NextResponse.json(pages);
}
