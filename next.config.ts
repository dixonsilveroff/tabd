import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Allow serving images from the public directory without optimization issues
    unoptimized: false,
    // Placeholder for product images that may not yet exist on disk
    dangerouslyAllowSVG: true,
    remotePatterns: [],
  },
};

export default nextConfig;
