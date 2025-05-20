// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable static export for deployment to EC2
  output: 'export',
  
  // Add trailing slashes to URLs for better static hosting
  trailingSlash: true,
  
  // Optimize images for static export (disable Next.js image optimization)
  images: {
    unoptimized: true
  },
  
  // Configure for static hosting
  distDir: 'out',
  
  // Ensure proper asset handling
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Base path if you're deploying to a subdirectory (leave empty for root)
  basePath: '',
  
  // Environment variables that should be available in the browser
  env: {
    // Add any environment variables you need in the browser here
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Experimental features (if needed)
  experimental: {
    // Add any experimental features you're using
  },
  
  // Webpack configuration (if you need custom webpack settings)
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Custom webpack configuration here if needed
    return config
  },
  
  // Rewrites for API routes (Note: API routes won't work in static export)
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://your-api-domain.com/api/:path*'
  //     }
  //   ]
  // },
  
  // Headers configuration
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig