// Jest Config Node-centric configuration

module.exports = {
  testEnvironment: "node",

  // Only test Source Code
  roots: ["<rootDir>/src"],

  // Allow ~/ absolute imports inside of tests
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1"
  },

  // Transform all tests written in TypeScript to Javascript
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  // Coverage
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    // Collect Coverage from:
    "**/*.js", // All Javascript files
    "**/*.ts", // All Typescript files
    "!**/node_modules/**", //   ... except node modules
    "!**/dist/**", //   ... and our dist dir
    "!**/coverage/**", //   ... and the coverage dir itself,
    "!**/*.config.js" //   ... nor any config files (eg. next.config.js nor jest.config.js)
  ]
};
