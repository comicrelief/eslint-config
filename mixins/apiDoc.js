module.exports = {
  rules: {
    // Add custom JSdoc tags required for apiDoc.
    "jsdoc/check-tag-names": [
      "error",
      {
        definedTags: [
          "api",
          "apiBody",
          "apiDefine",
          "apiDeprecated",
          "apiDescription",
          "apiError",
          "apiErrorExample",
          "apiExample",
          "apiGroup",
          "apiHeader",
          "apiHeaderExample",
          "apiIgnore",
          "apiName",
          "apiParam",
          "apiParamExample",
          "apiPermission",
          "apiPrivate",
          "apiQuery",
          "apiSampleRequest",
          "apiSuccess",
          "apiSuccessExample",
          "apiUse",
          "apiVersion",
          "mermaid",
        ],
      },
    ],
    // Allows for spaces of JSDoc and other comment blocks. This is disabled by the base config, but helps for formatting.
    "no-trailing-spaces": [
      "error",
      {
        ignoreComments: true,
      },
    ],
  },
};
