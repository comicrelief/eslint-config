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
    // these rules can report incorrect errors or crash in TypeScript files
    "semi": "off",
    "no-shadow": "off",
    "indent": "off",
    "import/no-webpack-loader-syntax": "off",
    "import/no-useless-path-segments": "off",
    // these are the replacement "extension rules" from @typescript-eslint
    "@typescript-eslint/semi": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/indent": ["error", 2, { "SwitchCase": 0 }],
  },
}
