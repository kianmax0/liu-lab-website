import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/liu-lab-website",
  assetPrefix: "/liu-lab-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
