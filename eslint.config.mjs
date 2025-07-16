import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginQuery from '@tanstack/eslint-plugin-query'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        plugins: {
            '@tanstack/query': pluginQuery,
        },
    },
    {
        rules: {
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/ban-ts-comment': 'warn',
            'react/no-children-prop': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    },
]

export default eslintConfig
