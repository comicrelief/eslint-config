module.exports = {
  "env": {
    "es6": true,
    "mocha": true,
  },
  "rules": {
    "func-names": "off",
    "no-console": "off",
    "no-unused-expressions": "off",

    // In tests it may be helpful to just repeat a string
    // instead of making very different tests dependent
    // on each other
    "sonarjs/no-duplicate-string": "off",
  },
}
