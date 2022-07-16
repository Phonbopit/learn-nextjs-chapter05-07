/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['meow.senither.com'],
  },
}

module.exports = nextConfig
