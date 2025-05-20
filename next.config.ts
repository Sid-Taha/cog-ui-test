// next.config.ts - REMOVE the output: 'export' line
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Remove this line: output: 'export',
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig