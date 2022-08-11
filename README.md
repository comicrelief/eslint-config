# eslint-config

Shared ESLint configuration for Comic Relief codebases.

If you're upgrading to version 2.x, see [Upgrade guides](#1x-to-2x).

## Usage

1. Install `eslint` if you haven't already done so.

   ```bash
   yarn add --dev eslint
   ```

2. Install this package and any [additional dependencies](#dependencies) you require.

   ```bash
   yarn add --dev @comicrelief/eslint-config eslint-plugin-import
   ```

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
- `apiDoc`: Extends `jsdoc` to include [apiDoc](https://apidocjs.com/) tags.

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

ESLint plugins and parsers must be added explicitly to your project's dev dependencies. They are listed as peer dependencies of this config. Note that you may not need to install all of them if you do not use certain mixins.

The commands below will install everything you need for each config, including in some cases the peer dependencies of our peer dependencies.

### `@comicrelief/eslint-config`

```bash
yarn add --dev \
  @babel/eslint-parser@^7.11.3 \
  eslint-plugin-flowtype@^8.0.3 \
  eslint-plugin-import@^2.25.2 \
  eslint-plugin-sonarjs@^0.13.0 \
  eslint-plugin-unicorn@^42.0.0
```

### `@comicrelief/eslint-config/mixins/base`

```bash
yarn add --dev \
  eslint-plugin-import@^2.25.2
```

### `@comicrelief/eslint-config/mixins/flowtype`

```bash
yarn add --dev \
  @babel/eslint-parser@^7.11.3 \
  @babel/plugin-syntax-flow@^7.18.6 \
  @babel/plugin-transform-react-jsx@^7.18.10 \
  eslint-plugin-flowtype@^8.0.3
```

### `@comicrelief/eslint-config/mixins/jsdoc`

```bash
yarn add --dev \
  eslint-plugin-jsdoc@^39.3.2
```

### `@comicrelief/eslint-config/mixins/sonarjs`

```bash
yarn add --dev \
  eslint-plugin-sonarjs@^0.13.0
```

### `@comicrelief/eslint-config/mixins/ts`

```bash
yarn add --dev \
  @typescript-eslint/eslint-plugin@^5.33.0 \
  @typescript-eslint/parser@^5.33.0 \
  typescript
```

### `@comicrelief/eslint-config/mixins/unicorn`

```bash
yarn add --dev \
  eslint-plugin-unicorn@^42.0.0
```

## Development

- Clone the repository.
- Install the dependencies via `yarn install`.
- Add / edit / remove rules as required.
- Test on the example files via `yarn test`.
- Push a branch to this repo.
- Test linting on a candidate repo by installing the develpoment branch via `@comicrelief/eslint-config#branch_name`.

## Notes

If you're using the [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for Visual Studio Code and you want to lint TypeScript files, you need to add the following key to your `settings.json`:

```json
{
  "eslint.validate": ["typescript"]
}
```

The easiest way to edit your `settings.json` is via the Command Palette: ⇧⌘P *Preferences: Open Settings (JSON)*.

## Upgrade guides

### 1.x to 2.x

- **ESLint 8 is required.** (as of 2.0.0)

  Older versions of ESLint have compatibility issues with some plugins and are no longer supported.

- **You must explicitly add ESLint plugins to your dependencies.** (as of 2.0.3)

  Package managers have no obligation to place *subdependencies* in `node_modules`, which means having them as dependencies of our config is not a guaranteed way of making them available to ESLint. So far we've just been lucky. They are now all peer dependencies.
  
  See [Dependencies](#dependencies) for what you need to install.
