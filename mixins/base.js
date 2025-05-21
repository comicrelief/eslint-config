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
    "import/order": ["error", {
      "alphabetize": {
        "order": "asc",
      },
      "groups": ["builtin", "external", "internal"],
      "pathGroups": [
        // Order all @comicrelief packages
        // just after the external packages
        {
          "pattern": "@comicrelief/**",
          "group": "external",
          "position": "after",
        },
        // Order all @/src/**
        // just before all local/relative imports
        {
          "pattern": "@/src/**",
          "group": "internal",
          "position": "before",
        },
        // Order all remaining alias
        // just before all local/relative imports
        {
          "pattern": "@/**",
          "group": "internal",
          "position": "before",
        },
      ],
      "pathGroupsExcludedImportTypes": ["builtin"],
      "newlines-between": "always"
    }],
    "linebreak-style": "off",
    "max-len": "off",
    "no-await-in-loop": "off",
    "no-restricted-syntax": "off",
    "no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
    }],
    "prefer-destructuring": "off",
    // Also order the individual import members
    // from each file declaration
    "sort-imports": ["error", {
      "ignoreDeclarationSort": true,
    }]
  },
};
