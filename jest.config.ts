import { Config } from 'jest';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.spec.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/types/**/*.ts',
  ],
  transform: {
    '<transform_regex>': ['ts-jest', {
      diagnostics: false,
      isolatedModules: true,
    }],
  },
} satisfies Config;