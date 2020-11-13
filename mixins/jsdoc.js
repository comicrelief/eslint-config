module.exports = {
  "plugins": [
    "jsdoc",
  ],
  "extends": [
    "plugin:jsdoc/recommended",
  ],
  "rules": {
    // Enable JSdoc checks
    "jsdoc/require-jsdoc": [2, {
      checkGetters: true,
      checkSetters: true,
      publicOnly: true,
      checkConstructors: false,
      require: {
        ArrowFunctionExpression: true,
        ClassDeclaration: true,
        ClassExpression: true,
        FunctionDeclaration: true,
        FunctionExpression: true,
        MethodDefinition: true,
      },
    }],
    // The fixer from `jsdoc/require-jsdoc`
    // will create an automatic jsdoc block
    // which is helpful, but still incomplete.
    // We want to flag those
    "jsdoc/require-description": 2,

    // Parameters and returns may be self explaining
    "jsdoc/require-param-description": "off",
    "jsdoc/require-returns-description": "off",

    // Adding types to JSdoc is a chore
    // we should be using TypeScript instead
    "jsdoc/require-param-type": "off",
    "jsdoc/no-undefined-types": "off",

    // Requiring returns really means
    // requiring types, see above
    "jsdoc/require-returns": "off",

    // Add custom JSdoc tags
    "jsdoc/check-tag-names": [2, {
      definedTags: [
        "mermaid"
      ],
    }],

  }
};
