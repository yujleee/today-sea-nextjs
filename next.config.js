/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: "@import 'styles/base/colors.scss'; @import 'styles/mixin/*';",
  },
};

module.exports = nextConfig;
