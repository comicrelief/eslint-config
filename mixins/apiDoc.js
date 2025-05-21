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
        ],
      },
    ],
    // Allow blank lines between tags
    "jsdoc/tag-lines": "off",
  },
};
