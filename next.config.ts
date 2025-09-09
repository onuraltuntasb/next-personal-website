import type { NextConfig } from "next";

const repoName = process.env.PAGES_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: repoName,
  assetPrefix: repoName,
  // to debug on production
  swcMinify: false, 
};

export default nextConfig;
