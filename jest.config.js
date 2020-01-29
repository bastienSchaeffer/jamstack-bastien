module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.[jt]sx?$': `<rootDir>/jest-preprocess.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|svg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
    __PATH_PREFIX__: '',
  },
  setupFilesAfterEnv: ['<rootDir>/src/util/test/setupTests.js'],
};
