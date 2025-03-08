module.exports = {
    root: true,
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    ignorePatterns: ["projects/**/*", ".eslintrc.js"],
    plugins: [
        "@angular-eslint/eslint-plugin",
        "@typescript-eslint/eslint-plugin",
        "@angular-eslint/eslint-plugin-template",
    ],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "eslint:recommended",
        "plugin:@angular-eslint/recommended"
    ],
    env: {
        node: true,
        browser: true, 
    },
    rules: {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@angular-eslint/directive-selector": [
            "error",
            {
                type: "attribute",
                prefix: "app",
                style: "camelCase",
            },
        ],
        "@angular-eslint/component-selector": [
            "error",
            {
                type: ["element", "attribute"],
                prefix: "app",
                style: "kebab-case",
            },
        ],
        "@angular-eslint/no-empty-lifecycle-method": ["error"],
    },
    overrides: [
        {
            files: ["*.ts"],
            plugins: ["prettier"],
            extends: ["prettier"],
            rules: {
                "prettier/prettier": "warn",
            },
        },
        {
            files: ["*.html"],
            extends: ["plugin:@angular-eslint/template/recommended"],
            rules: {},
        },
    ],
};