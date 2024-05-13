module.exports = {
  displayName: 'react project',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss|svg)$': 'identity-obj-proxy',
    '@env': '<rootDir>/src/env.ts',
    '@atoms': '<rootDir>/src/libs/ui/atoms/index.ts'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/index.ts',
    '!src/index.tsx',
    '!src/env.ts',
    '!src/**/jest.setup.ts',
    '!<rootDir>/node_modules/'
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  },
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'html']
};
