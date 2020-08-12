# eslint-config
Shared Eslint configuration for Comic Relief codebases.

# Configurations

The package exposes three eslint configurations:

- `@comicrelief/eslint-config`: Main Eslint configuration, to be used by source files in back-end applications.
- `@comicrelief/eslint-config/react`: Main Eslint configuration, to be used by source files in front-end applications.
- `@comicrelief/eslint-config/tests`: Tests Eslint configuration, to be used by test files. It inherits from `@comicrelief/eslint-config` and specifies additional rules required by unit tests and feature tests.

# Usage

- Install via `yarn add @comicrelief/eslint-config --dev`.
- Extended desired configuration in .eslintrc -or wherever eslint config exists-:
````
{
  "extends": "@comicrelief/eslint-config"
}
````

# Development

- Clone the repository.
- Install the dependencies via `yarn install`.
- Add / edit / remove rules as required.
- Test on a candidate repo by installing test branch via `@comicrelief/eslint-config@comicrelief/eslint-config#branch_name`.
