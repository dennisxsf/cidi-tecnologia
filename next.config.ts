import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? "/cidi-tecnologia" : undefined,
  assetPrefix: isProduction ? "/cidi-tecnologia/" : undefined,
};

export default nextConfig;
