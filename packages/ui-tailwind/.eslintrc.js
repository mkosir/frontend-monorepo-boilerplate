/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['eslint-config-base'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
