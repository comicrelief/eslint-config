# eslint-config
Shared Eslint configuration for Comic Relief codebases.

# Configurations

The package exposes two eslint configuration:

- `@comicrelief/eslint-config`: Main Eslint configuration, to be used by source files in back-end applications.
- `@comicrelief/eslint-config/react`: Main Eslint configuration, to be used by source files in front-end applications.
- `@comicrelief/eslint-config/tests`: Tests Eslint configuration, to be used by test files. It inherits from `@comicrelief/eslint-config` and specifies additional rules required by unit tests and feature tests.

# Development

- Clone the repository.
- Install the dependencies `yarn install`.
- Add / edit / remove rules as required.
- Run eslint with `yarn eslint .`.

NB: If you are modifying `peerDependencies`, please reflect the changes in the `devDependencies` field as well.
