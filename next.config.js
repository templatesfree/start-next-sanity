/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  swcMinify: false,
  eslint: {
    dirs: ['pages', 'components'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      },
    ],
  },
}

module.exports = nextConfig
