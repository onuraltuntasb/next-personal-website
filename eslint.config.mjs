import { FlatCompat } from '@eslint/eslintrc';
import eslintJs from '@eslint/js';

import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import tailwind from 'eslint-plugin-tailwindcss';
import { dirname } from 'path';
import typescriptEslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat allows using legacy ESLint configs with flat config
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
    // Extend Next.js defaults (optional now, we can add later)
    // ...compat.extends('next/core-web-vitals'),

    // Recommended JavaScript rules
    eslintJs.configs.recommended,

    // TypeScript recommended rules
    ...typescriptEslint.configs.recommended,

    // React rules
    eslintPluginReact.configs.flat.recommended,
    eslintPluginReact.configs.flat['jsx-runtime'],

    // Top-level React settings (version detect)
    {
        settings: {
            react: { version: 'detect' }
        }
    },

    // File-specific rules
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            parserOptions: {
                project: './tsconfig.json'
            }
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            'react/react-in-jsx-scope': 'off',
            'react-hooks/exhaustive-deps': 'off',
            'react/display-name': 'off',
            'react/prop-types': 'off'
        }
    },

    //"tailwind spesific rules"
    //"eslint-plugin-tailwindcss" still in beta for tailwind v4 so don't use rules for now, it still uses flatconfig...
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        plugins: { tailwind },
        rules: {
            //'tailwindcss/no-custom-classname': 'warn'
        }
    },

    //eslint-plugin spesfic rules
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        plugins: { import: eslintPluginImport },
        rules: {
            //My custom overrides
            'import/no-unresolved': 'off',
            'import/no-named-as-default': 'off',

            // Some recommended rules from import/recommended
            'import/no-absolute-path': 'error',
            'import/no-dynamic-require': 'error',
            'import/export': 'error'
        },
        settings: {
            'import/resolver': {
                node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
            }
        }
    },

    {
        ignores: [
            '.github/**',
            'node_modules/**',
            '.next/**',
            'out/**',
            'build/**',
            'next-env.d.ts',
            'eslint.config.mjs'
        ]
    },

    //prettier integration
    eslintConfigPrettier
];
