import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.twcstorage.ru',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const FaroSourceMapUploaderPlugin = require('@grafana/faro-webpack-plugin').default

      config.plugins.push(
        new FaroSourceMapUploaderPlugin({
          appName: 'atomic-tech',
          endpoint: 'https://faro-api-prod-eu-west-2.grafana.net/faro/api/v1',
          appId: '4191',
          stackId: '1443038',
          verbose: true,
          apiKey: process.env.NEXT_PUBLIC_GRAFANA_FARO_API_KEY!,
          gzipContents: true,
        })
      )
    }

    return config
  },
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  trailingSlash: true
};

export default nextConfig;
