module.exports = {
  "extends": [
    "./mixins/base.js",
    "./mixins/flowtype.js",
    "./mixins/sonarjs.js",
  ],
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "extends": [
        "./mixins/ts.js"
      ]
    }
  ]
};
