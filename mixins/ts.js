module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    // these eslint rules can report incorrect errors in TypeScript files
    "semi": "off",
    "@typescript-eslint/semi": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
  },
}
