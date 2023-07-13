/** @type {import("eslint").Linter.Config} */

module.exports = {
  root: true,

  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },

  extends: ['eslint-config-base'],
};
