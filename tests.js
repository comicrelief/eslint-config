module.exports = {
  "extends": "./index.js",
  "env": {
    "mocha": true
  },
  "rules": {
    "func-names": "off",
    "no-console": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "sonarjs/cognitive-complexity": "off",
  }
}
