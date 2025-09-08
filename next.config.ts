import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['storage.googleapis.com'], // Allow images from Google Storage
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/gtv-videos-bucket/**',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development', // For local development
  },
};

export default nextConfig;
