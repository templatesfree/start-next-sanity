/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  swcMinify: false,
  eslint: {
    dirs: ['pages', 'components'],
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
