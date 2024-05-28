import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.js', '**/*.vue', '**/*.ts', '**/*.tsx'],
  rules: {
    'no-console': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    '@typescript-eslint/no-explicit-any': 'off',
    'indent': ['error', 2],
  }
})
