import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginJest from 'eslint-plugin-jest';

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
    { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
    { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
    {
        files: ['**/*.spec.js', '**/*.test.js'],
        plugins: { jest: pluginJest },
        languageOptions: {
            globals: pluginJest.environments.globals.globals,
        },
        rules: {
            'jest/no-disabled-tests': 'warn',
            'jest/no-focused-tests': 'error',
            'jest/no-identical-title': 'error',
            'jest/prefer-to-have-length': 'warn',
            'jest/valid-expect': 'error',
        },
    },
]);
