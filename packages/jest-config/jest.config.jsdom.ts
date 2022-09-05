import { Config } from 'jest';

export const jestConfigJsdom: Config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.tsx'],
  globals: {
    'ts-jest': {
      tsconfig: `${__dirname}/../tsconfig/tsconfig.test.json`,
    },
  },
};
