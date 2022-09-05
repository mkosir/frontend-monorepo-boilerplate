import { Config } from 'jest';

import { jestConfigJsdom } from '../../packages/jest-config';

const jestConfig: Config = {
  ...jestConfigJsdom,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};

module.exports = jestConfig;
