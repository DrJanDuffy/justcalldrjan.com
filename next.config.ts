import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // Target modern browsers to reduce polyfills
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
}

export default nextConfig
