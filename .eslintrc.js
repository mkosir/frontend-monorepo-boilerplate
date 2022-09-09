/** @type {import("eslint").Linter.Config} */

// This eslint configuration is being used only with lint-staged

module.exports = {
  root: true,
  extends: ['eslint-config-base'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.lintstaged.json'],
  },
};
