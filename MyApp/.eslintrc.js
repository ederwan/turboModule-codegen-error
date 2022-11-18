module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-duplicate-imports': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    semi: 0,
    'jsx-quotes': 0,
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
  },
}
