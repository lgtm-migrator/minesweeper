const path = require("path");

module.exports = {
  clearMocks: true,
  restoreMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [path.resolve(__dirname, "src/**/*.{js,jsx,ts,tsx}")],
  coverageDirectory: "coverage",
  coverageReporters: ["text-summary", "lcov"],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 99,
      lines: 99,
      statements: 95,
    },
  },
  errorOnDeprecated: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg|bmp|woff|woff2|ttf)$": "<rootDir>/test/mocks/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "test/(.*)$": "<rootDir>/test/$1",
    "~/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  globalTeardown: "<rootDir>/test/teardown.ts",
  fakeTimers: {
    enableGlobally: true,
  },
  verbose: true,
  testEnvironment: "jsdom",
};