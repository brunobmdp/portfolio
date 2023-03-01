/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],

  images: {
    domains: ['github.com', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig
