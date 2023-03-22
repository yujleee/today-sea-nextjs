/** @type {import('next').NextConfig} */
import path from 'path';
const __dirname = path.resolve();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: "@import 'styles/base/colors.scss'; @import 'styles/mixin/*';",
  },
};

module.exports = nextConfig;
