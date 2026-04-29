import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.0.101'],
  transpilePackages: ['@repo/ui'],
};

export default nextConfig;
