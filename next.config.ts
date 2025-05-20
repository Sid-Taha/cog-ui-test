import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Remove static export - we want SSR!
  // output: 'export', // REMOVE THIS LINE
  
  // Keep these for better compatibility
  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_COGNITO_USER_POOL_ID: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
    NEXT_PUBLIC_COGNITO_CLIENT_ID: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
    NEXT_PUBLIC_COGNITO_REGION: process.env.NEXT_PUBLIC_COGNITO_REGION,
  },
  
  // Images for SSR
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig