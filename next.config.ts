import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
     turbopack: {},
     typedRoutes: true,
     experimental: {
          optimizePackageImports: ['@phosphor-icons/react'],
     },
     images: {
          remotePatterns: [
               {
                    protocol: 'https',
                    hostname: 's3.twcstorage.ru',
               },
          ],
     },
     reactStrictMode: true,
     skipTrailingSlashRedirect: true,
     trailingSlash: true,
}

export default nextConfig
