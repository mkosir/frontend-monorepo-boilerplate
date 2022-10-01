import { Config } from 'jest';

import { jestConfigJsdom } from '../config-jest';

const jestConfig: Config = {
  ...jestConfigJsdom,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.tsx'],
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
