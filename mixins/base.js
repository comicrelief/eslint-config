module.exports = {
  "extends": [
    "eslint-config-airbnb-base",
  ],
  "env": {
    "es6": true,
    "node": true,
  },
  "rules": {
    "indent": ["error", 2],
    "import/no-cycle": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "linebreak-style": "off",
    "max-len": "off",
    "no-restricted-syntax": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "prefer-destructuring": "off",
  },
};
