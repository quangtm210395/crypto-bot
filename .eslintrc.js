module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  rules: {
    semi: 'error',
    'no-console': 'off',
  },
};
