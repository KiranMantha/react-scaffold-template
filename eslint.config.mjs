import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/jsx-runtime.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
      }
    },
    ignores: ['build/**/*', 'eslint.config.mjs', 'craco.config.js', 'commitlint.config.js'],
    rules: {
      'no-unused-vars': 'error',
      'prefer-const': ['error'],
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      '@typescript-eslint/no-use-before-define': 'error'
    }
  }
];
