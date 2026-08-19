import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import stylexPlugin from "@stylexjs/eslint-plugin";

export default tseslint.config(
  // Global ESLint
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "**/dist/**",
      "**/node_modules/**",
      "eslint.config.js",
    ],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      // Replaces env: { browser: true }
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@stylexjs": stylexPlugin,
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      // stylexjs start
      '@stylexjs/valid-styles': 'error',
      '@stylexjs/no-unused': 'error',
      '@stylexjs/valid-shorthands': 'warn',
      '@stylexjs/sort-keys': 'warn',
      // stylexjs end

      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
