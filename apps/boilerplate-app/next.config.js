/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['ui']);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const nextConfig = withTM({
  reactStrictMode: true,
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
module.exports = nextConfig;
