import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
    {
        ignores: [
            'dist',
            'build',
            'node_modules',
            'coverage',
            '*.config.js',
            '*.config.ts',
            'public',
            'scripts',
        ],
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.node,
                // Vitest globals
                describe: 'readonly',
                it: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly',
                vi: 'readonly',
            },
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        settings: {
            react: { version: '18.3' },
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
                alias: {
                    map: [
                        ['@', './src'],
                        ['@components', './src/components'],
                        ['@views', './src/views'],
                        ['@utils', './src/utils'],
                        ['@hooks', './src/hooks'],
                        ['@types', './src/types'],
                        ['@assets', './src/assets'],
                    ],
                    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
                },
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            '@typescript-eslint': tseslint,
            'jsx-a11y': jsxA11y,
            import: importPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,

            // TypeScript specific rules
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                    disallowTypeAnnotations: false,
                },
            ],

            // React specific rules
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/jsx-uses-react': 'off',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            // Import rules
            'import/order': 'off', // Disabled - too strict and tedious to maintain
            'import/no-duplicates': 'error',
            'import/no-unresolved': 'error',
            'import/named': 'error',
            'import/default': 'error',

            // General code quality rules
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-debugger': 'warn',
            'prefer-const': 'error',
            'no-var': 'error',
            'object-shorthand': 'error',
            'quote-props': ['error', 'as-needed'],
            eqeqeq: ['error', 'always', { null: 'ignore' }],
            'no-unused-expressions': 'off', // Disabled for styled-components
            'no-undef': 'off', // TypeScript handles this better

            // Accessibility rules
            'jsx-a11y/alt-text': 'warn',
            'jsx-a11y/anchor-is-valid': 'warn',
            'jsx-a11y/click-events-have-key-events': 'warn',
            'jsx-a11y/no-static-element-interactions': 'warn',
        },
    },
];
