import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Set by the GitHub Actions workflow (via actions/configure-pages) so the
  // site works correctly at https://yllkauka.github.io/yllkauka-portfolio/.
  // Unset locally, so `npm run dev` / `npm run build` still work at the root.
  basePath: process.env.PAGES_BASE_PATH,
  images: {
    // GitHub Pages serves static files only — no image optimization server.
    unoptimized: true,
  },
};

export default nextConfig;
