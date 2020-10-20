module.exports = {
  preset: 'react-native',
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '**/*.ts',
    '**/*.tsx',
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
};
