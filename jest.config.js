const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', './src/utils/', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', './src/utils/test-utils.tsx'],
  snapshotSerializers: ['@emotion/jest/serializer'],
}

module.exports = createJestConfig(customJestConfig)
