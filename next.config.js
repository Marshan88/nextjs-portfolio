const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withBuilderDevTools({
  /* config options here */
});

module.exports = nextConfig;
