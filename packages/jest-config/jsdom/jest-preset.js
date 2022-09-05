const jestConfig = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  // Required despite ts-jest preset
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};

module.exports = jestConfig;
