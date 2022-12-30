module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'airbnb-base',
    ],
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
        },
    },
    rules: {
        'no-param-reassign': [2, { props: false }],
        indent: 0,
        'linebreak-style': [2],
        radix: ['error', 'as-needed'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: '*', next: ['try'] },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'never', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        ],
        'import/prefer-default-export': 0,
        'prefer-template': 1,
        'no-shadow': 0,
        'max-len': 0,
        'max-classes-per-file': 0,
        'import/no-unresolved': 'error',
        'import/extensions': ['error', 'ignorePackages', {
            js: 'never',
            json: 'never',
            jsx: 'never',
            mjs: 'never',
            ts: 'never',
            tsx: 'never',
        }],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'airbnb-typescript/base',
            ],
            parserOptions: {
                project: ['./tsconfig.json'],
            },
            rules: {
                'consistent-return': 'off',
                '@typescript-eslint/indent': ['error', 4, {
                    SwitchCase: 1,
                }],
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/member-delimiter-style': ['error', {
                    multiline: {
                        delimiter: 'none',
                        requireLast: true,
                    },
                    singleline: {
                        delimiter: 'semi',
                        requireLast: false,
                    },
                    multilineDetection: 'brackets',
                }],
                '@typescript-eslint/no-shadow': 'warn',
                '@typescript-eslint/no-unused-vars': 'warn',
                '@typescript-eslint/padding-line-between-statements': [
                    'error',
                    {
                        blankLine: 'always',
                        prev: '*',
                        next: ['interface', 'type'],
                    },
                    {
                        blankLine: 'always',
                        prev: '*',
                        next: 'return',
                    },
                    {
                        blankLine: 'always',
                        prev: ['const', 'let', 'var'],
                        next: '*',
                    },
                    {
                        blankLine: 'any',
                        prev: ['const', 'let', 'var', 'type'],
                        next: ['const', 'let', 'var', 'type'],
                    },
                ],
                '@typescript-eslint/space-infix-ops': ['error', {
                    int32Hint: false,
                }],
                '@typescript-eslint/type-annotation-spacing': ['error', {
                    before: false,
                    after: true,
                    overrides: {
                        arrow: {
                            before: true,
                            after: true,
                        },
                    },
                }],
            },
        },
    ],
};
