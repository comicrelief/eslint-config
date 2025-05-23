module.exports = {
  "extends": [
    "plugin:flowtype/recommended",
  ],
  "parser": "@babel/eslint-parser",
  "plugins": [
    "flowtype",
  ],
  "rules": {
    "flowtype/no-types-missing-file-annotation": "off",
  },
};
