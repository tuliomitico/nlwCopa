module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./server/tsconfig.json'],
  },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
};
