/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["ui"]);

const nextConfig = withTM({
  reactStrictMode: true,
});

module.exports = nextConfig;
