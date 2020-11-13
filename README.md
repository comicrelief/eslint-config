# eslint-config

Shared ESLint configuration for Comic Relief codebases.

## Usage

1. Install `eslint` if you haven't already done so.

       yarn add eslint --dev

2. Install this package.

       yarn add @comicrelief/eslint-config --dev

3. Extend the desired configuration in your project's ESLint config:

   ```yaml
   # .eslintrc.yml
   extends:
     - '@comicrelief/eslint-config'
   ```

This will give you the default linting configuration, which includes rules from the `flowtype`, `sonarjs` and `unicorn` plugins.

## Mixins

As well as our default ESLint config, various common customisations are available that you can "mix in" to your config:

- `base`: Base configuration that you should extend if you're not using `@comicrelief/eslint-config`. See TypeScript example below.
- `flowtype`: Adds [Flow typing](https://github.com/gajus/eslint-plugin-flowtype#readme) rules.
- `jest`: Uses the `jest` environment.
- `jsdoc`: Adds [JSDoc](https://github.com/gajus/eslint-plugin-jsdoc#readme) rules.
- `mocha`: Uses the `mocha` environment.
- `sonarjs`: Adds [SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs) rules.
- `unicorn`: Adds [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#readme) rules.

For example, in order for linting to work in tests, you should include the `jest` or `mocha` mixin:

```yaml
# .eslintrc.yml
extends:
  - '@comicrelief/eslint-config'
  - '@comicrelief/eslint-config/mixins/jest'
```

When working in TypeScript, many rules that catch common JavaScript errors are no longer needed, and you would not want to use Flow. In this case, rather than use `@comicrelief/eslint-config` you should use `@comicrelief/eslint-config/mixins/base`.

```yaml
# .eslintrc.yml
extends:
  - '@comicrelief/eslint-config/mixins/base'
  - '@comicrelief/eslint-config/mixins/ts'
```

## Dependencies

Some of the configurations require additional dependencies. They are not listed as `peerDependencies` in `package.json` as they might not be used in all projects.

### `@comicrelief/eslint-config/mixins/ts`

```bash
yarn add --dev \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser
```

## Development

- Clone the repository.
- Install the dependencies via `yarn install`.
- Add / edit / remove rules as required.
- Push a branch to this repo.
- Test linting on a candidate repo by installing the develpoment branch via `@comicrelief/eslint-config#branch_name`.
