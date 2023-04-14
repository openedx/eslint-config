[![Build Status](https://github.com/openedx/eslint-config/actions/workflows/release.yml/badge.svg)](https://github.com/openedx/eslint-config/actions/workflows/release.yml/)
[![NPM Version](https://img.shields.io/npm/v/@edx/eslint-config.svg)](https://www.npmjs.com/package/@edx/eslint-config)
[![npm_downloads](https://img.shields.io/npm/dt/@edx/eslint-config.svg)](https://www.npmjs.com/package/@edx/eslint-config)
[![license](https://img.shields.io/npm/l/@edx/eslint-config.svg)](https://github.com/openedx/eslint-config/blob/master/LICENSE)
[![semantic release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# @edx/eslint-config

## Installation

If you're using @edx/frontend-build, then you'll get this package for free. Otherwise, you can install it via:

```shell
npx install-peerdeps --dev @edx/eslint-config
```

This will install the package and all of its peer dependencies.

Then, once it's installed, create an `.eslintrc.js` file in the top-level directory of your project with the following contents:

```js
module.exports = {
  extends: "@edx/eslint-config",
}
```

### Using TypeScript

If `@edx/eslint-config` detects a `tsconfig.json` file in the root folder of your project, it will optionally configure ESLint to add support for TypeScript. If a `tsconfig.json` file exists, the ESLint config will:
* Extend `airbnb-typescript` ([source](https://www.npmjs.com/package/eslint-config-airbnb-typescript)).
* Configure `parserOptions.project` to point to the `tsconfig.json` file in the root folder of your project.

`airbnb-typescript` may only be extended if a `tsconfig.json` file exists in your project.

If your `tsconfig.json` file is defined somewhere other than the root folder of your project, you may override the default ESLint configuration by extending `airbnb-typescript` and including the path to your `tsconfig.json` file in the `parserOptions.project` ESLint configuration.
