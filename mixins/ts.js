module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "@stylistic"
  ],
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    // allow unused arguments if prefixed with an underscore
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    // these rules can crash in TypeScript files
    "import/no-webpack-loader-syntax": "off",
    "import/no-useless-path-segments": "off",
    // these rules can report incorrect errors in TypeScript files
    "comma-dangle": "off",
    "indent": "off",
    "no-shadow": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "semi": "off",
    // stylistic rules
    "@stylistic/comma-dangle": ["error", "always-multiline"],
    "@stylistic/indent": ["error", 2, { "SwitchCase": 0 }],
    "@stylistic/semi": "error",
    // non-stylistic typescript rules
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-useless-constructor": "error",
  },
}
