module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html'],
  moduleFileExtensions: ['', 'js', 'json'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
  // setupTestFrameworkScriptFile: 'jest-enzyme',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'enzyme',
  // testEnvironmentOptions: {
  //   enzymeAdapter: 'react16'
  // },
  testMatch: [
    '<rootDir>/src/__tests__/**/*.js?(x)',
    '<rootDir>/src/**/?(*-)(spec|test).js?(x)'
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  unmockedModulePathPatterns: ['react', 'enzyme', 'jest-enzyme'],
}
