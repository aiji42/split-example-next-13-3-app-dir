const withSplit = require('next-with-split').withSplit({
  splits: {
    test1: {
      path: '/*',
      hosts: {
        original: 'split-example-next-13-3-app-dir.vercel.app',
        'split-test-1': 'split-example-next-13-3-app-dir-git-split-test-1-aiji42.vercel.app',
      },
    }
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = withSplit(nextConfig)
