module.exports = {
  preset: 'react-native',
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '**/src/**/*.tsx',
    '!**/src/constants/Dimensions.ts',
    '!**/src/enums/*',
    '!**/navigation/*',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'cobertura', 'html', 'json'],
  testMatch: [
      '**/tests/**/*.ts',
      '**/tests/**/*.tsx'
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  testPathIgnorePatterns: ['node_modules'],
  setupFiles: [ "./node_modules/react-native-gesture-handler/jestSetup.js" ]
};
