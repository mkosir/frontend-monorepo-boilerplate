const jestConfig = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};

module.exports = jestConfig;
