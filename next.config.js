const withSplit = require('next-with-split').withSplit({})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = withSplit(nextConfig)
