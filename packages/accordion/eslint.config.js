import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  // 1. Replaces ignorePatterns
  {
    ignores: ['dist', 'eslint.config.js']
  },

  // 2. Base JS configuration
  js.configs.recommended,

  // 3. TypeScript configuration (Replaces parser & plugin configs)
  ...tseslint.configs.recommended,

  // 4. React Hooks & Refresh configurations
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: "latest",
      // Replaces env: { browser: true }
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    linterOptions: {
      // Replaces "--report-unused-disable-directives" (can set to "warn" or "error")
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
