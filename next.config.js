/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'csv-loader',
      options: {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
      },
    })

    return config
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
