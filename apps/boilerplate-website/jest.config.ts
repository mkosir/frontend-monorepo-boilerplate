import { Config } from 'jest';
import nextJest from 'next/jest';

import { jestConfigJsdom } from '../../packages/config-jest';

const createJestConfig = nextJest({
  dir: './',
});

const jestConfig: Config = {
  ...jestConfigJsdom,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.tsx'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};

module.exports = createJestConfig(jestConfig);
