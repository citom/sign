/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@documenso/eslint-config'],
  rules: {
    '@next/next/no-img-element': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
