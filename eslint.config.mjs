import { FlatCompat } from '@eslint/eslintrc';
import eslintJs from '@eslint/js';

import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginReact from 'eslint-plugin-react';
// import tailwind from 'eslint-plugin-tailwindcss';
//NOTE: eslint-plugin-tailwindcss package is using tailwind config v3 right now after update we can add updated package.
import globals from 'globals';
import { dirname } from 'path';
import typescriptEslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),

    //NOTE: my addings over nextjs default eslint config
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']
    },
    {
        languageOptions: {
            ecmaVersion: 'latest',
            globals: { ...globals.browser, ...globals.node }
        }
    },
    {
        settings: {
            react: {
                version: 'detect'
            }
        }
    },
    eslintJs.configs.recommended,
    eslintPluginImport.flatConfigs.recommended,
    ...typescriptEslint.configs.recommended,
    eslintPluginPromise.configs['flat/recommended'],
    eslintPluginReact.configs.flat.recommended,
    //NOTE: it's just makes eslint aware of new jsx-transform r17 feature.(using jsx without import react top of every file)
    eslintPluginReact.configs.flat['jsx-runtime'],
    eslintConfigPrettier,
    //NOTE: check top of page
    // ...tailwind.configs['flat/recommended'],

    {
        rules: {
            'no-unused-vars': 'off',
            'classnames-order': 'off',
            'react/react-in-jsx-scope': 'off',
            'react-hooks/exhaustive-deps': 'off',
            'react/display-name': 'off',
            'react/prop-types': 'off',
            'newline-before-return': 'error',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            'tailwindcss/no-custom-classname': 'off',
            'import/no-unresolved': 'off',
            'import/no-named-as-default': 'off'
        }
    },
    {
        ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts']
    }
];

export default eslintConfig;
