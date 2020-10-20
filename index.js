module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:flowtype/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended"
  ],
  "env": {
    "es6": true,
    "node": true,
  },
  "parser": "@babel/eslint-parser",
  "plugins": [
    "flowtype",
    "sonarjs",
    "unicorn"
  ],
  "rules": {
    "flowtype/no-types-missing-file-annotation": "off",
    "import/no-cycle": "off",
    "linebreak-style": "off",
    "max-len": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "unicorn/filename-case": "off",
    "unicorn/no-null": "off",
    "unicorn/prevent-abbreviations": "off",
    "prettier/prettier": ["error", { "singleQuote": true, "printWidth": 150 }]
  },
};
