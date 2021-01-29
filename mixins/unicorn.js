module.exports = {
  "extends": [
    "plugin:unicorn/recommended",
  ],
  "plugins": [
    "unicorn"
  ],
  "rules": {
    "unicorn/filename-case": "off",
    "unicorn/no-null": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/prevent-abbreviations": "off",
  },
};
