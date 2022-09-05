import { Config } from 'jest';

import { jestConfigJsdom } from '../jest-config';

const jestConfig: Config = {
  ...jestConfigJsdom,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};

module.exports = jestConfig;
