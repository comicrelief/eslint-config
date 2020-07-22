module.exports = {
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended"
  ],
  "parser": "babel-eslint",
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
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "unicorn/filename-case": "off",
  },
};
