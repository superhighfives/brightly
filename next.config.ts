import createMDX from '@next/mdx'

const withMDX = createMDX({
  // Optionally provide remark and rehype plugins
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)

