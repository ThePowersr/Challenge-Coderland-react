// jest.config.cjs
module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.ts',
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  coverageThreshold: {
    "global": {
      "lines": 99,
      "statements": 99
    }
  },
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,jsx,ts,tsx}"],
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/main.tsx',
  ],
};
