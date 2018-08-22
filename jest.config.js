module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
  testMatch: [
    '<rootDir>/src/__tests__/**/*.js?(x)',
    '<rootDir>/src/**/?(*-)(spec|test).js?(x)'
  ],
  testURL: 'http://localhost',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['', 'js', 'json'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  unmockedModulePathPatterns: ['react', 'enzyme', 'jest-enzyme']
}
