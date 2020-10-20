module.exports = {
  preset: 'react-native',
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '**/src/**/*.tsx',
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
  reporters: ['default'],
  testMatch: [
      '**/tests/**/*.ts?(x)'
  ],
  "moduleFileExtensions": [
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
