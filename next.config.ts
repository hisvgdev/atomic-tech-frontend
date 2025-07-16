import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'back.atomic-tech.ru',
        pathname: '/storage/**',
      },
    ],
  },

  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  trailingSlash: true
};

export default nextConfig;
