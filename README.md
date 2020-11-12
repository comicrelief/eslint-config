# eslint-config
Shared Eslint configuration for Comic Relief codebases.

# Configurations

The package exposes three eslint configurations:

- `@comicrelief/eslint-config`: Main Eslint configuration, to be used by source files in back-end applications.
- `@comicrelief/eslint-config/react`: Main Eslint configuration, to be used by source files in front-end applications.
- `@comicrelief/eslint-config/tests`: Tests Eslint configuration, to be used by test files. It inherits from `@comicrelief/eslint-config` and specifies additional rules required by unit tests and feature tests.
- `@comicrelief/eslint-config/ts`: Main TypeScript configuration.


# Usage

- Install via `yarn add @comicrelief/eslint-config --dev`.
- Extended the desired configuration in .eslintrc - or wherever eslint config exists:
````
{
  "extends": "@comicrelief/eslint-config"
}
````

# Dependencies

Some of the configurations require additional dependencies. They are not listed as `peerDependencies` in `package.json` as they might not be used in all projects.

## `@comicrelief/eslint-config/ts`

```bash
yarn add --dev \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser
```

# Development

- Clone the repository.
- Install the dependencies via `yarn install`.
- Add / edit / remove rules as required.
- Test on a candidate repo by installing test branch via `@comicrelief/eslint-config@comicrelief/eslint-config#branch_name`.
