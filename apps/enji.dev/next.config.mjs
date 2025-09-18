import bundeAnalyzer from '@next/bundle-analyzer';
import nextMDX from '@next/mdx';
import rehypePlugins from 'rehype-plugins';
import remarkPlugins from 'remark-plugins';

const isExport = process.env.NEXT_EXPORT === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable redirects when doing static export since Next.js cannot export custom routes
  redirects: async () =>
    isExport
      ? []
      : [
          {
            source: '/work',
            destination: '/work/skills-and-tools',
            permanent: false,
          },
          {
            source: '/docs',
            destination: '/docs/tailwindcss-accent',
            permanent: false,
          },
        ],
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  output: isExport ? 'export' : undefined,
  images: { unoptimized: isExport },
};

const withBundleAnalyzer = bundeAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins,
    rehypePlugins,
    providerImportSource: '@mdx-js/react',
  },
});

export default withBundleAnalyzer(withMDX(nextConfig));
