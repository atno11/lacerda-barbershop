import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import ts from 'typescript-eslint';

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  eslintConfigPrettier,
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'no-unused-vars': 'off',
      'turbo/no-undeclared-env-vars': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'prettier/prettier': 'error',
    },
  },
  {
    ignores: ['dist/**'],
  },
];

