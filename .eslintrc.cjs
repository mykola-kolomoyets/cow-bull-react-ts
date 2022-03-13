module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: ['airbnb-typescript'],
  env: {
    browser: true,
    es6: true
  },
  rules: {
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true }
    ],
    // quotes: ['error', 'single'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-plusplus': ['off'],
    'no-param-reassign': ['error', { props: false }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'quote-props': ['error', 'as-needed'],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      }
    ],
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    'react/jsx-props-no-spreading': ['error'],
    'react/jsx-filename-extension': ['error'],
    'react/no-unescaped-entities': [0],
    'no-console': 'error',
    'react/require-default-props': [
      0,
      { forbidDefaultForRequired: 0, ignoreFunctionalComponents: 0 }
    ],
    'jsx-a11y/label-has-associated-control': [0]
  }
};
