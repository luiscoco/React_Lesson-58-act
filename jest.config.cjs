module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
};