/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['base'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
