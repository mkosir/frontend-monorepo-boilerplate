import { Config } from 'jest';

const jestConfig: Config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};

module.exports = jestConfig;
