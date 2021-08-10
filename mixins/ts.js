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
    "comma-dangle": "off",
    "semi": "off",
    "no-shadow": "off",
    "no-useless-constructor": "off",
    "indent": "off",
    "import/no-webpack-loader-syntax": "off",
    "import/no-useless-path-segments": "off",
    // these are the replacement "extension rules" from @typescript-eslint
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/semi": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/indent": ["error", 2, { "SwitchCase": 0 }],
  },
}
