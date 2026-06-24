import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site in `out/` for GitHub Pages.
  output: "export",
  // GitHub Pages can't run the Next.js image optimizer.
  images: { unoptimized: true },
  // Emit each route as `route/index.html` for clean static URLs.
  trailingSlash: true,
};

export default nextConfig;
