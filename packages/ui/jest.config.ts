import { Config } from 'jest';

const jestConfig: Config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};

module.exports = jestConfig;
