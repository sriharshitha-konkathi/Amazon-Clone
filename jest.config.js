module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": ["babel-jest", { configFile: "./babel-jest.config.js" }],
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}", // Include all your React code files
    "!src/**/*.test.{js,jsx}", // Exclude test files
    "!src/**/mocks/**", // Exclude mock data
  ],
  coverageDirectory: "coverage",
};
