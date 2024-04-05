const path = require('path');
const fs = require('fs');

/**
 * TypeScript configuration for ESLint:
 *
 * Determine whether a `tsconfig.json` file exists in the root folder of the consuming
 * project. If it exists, ensure ESLint is configured for TypeScript appropriately.
 */
const typeScriptParserOptions = {};
const typeScriptExtensions = [];
const tsConfigPath = path.resolve(process.cwd(), 'tsconfig.json');
if (fs.existsSync(tsConfigPath)) {
  typeScriptParserOptions.project = tsConfigPath;
  typeScriptExtensions.push('airbnb-typescript');
}
/* End TypeScript configuration for ESLint */

module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  extends: [
    // The airbnb config includes configuraton for import, react, and jsx-a11y.
    // That means it's the only thing we need here.  We still need to
    // have those eslint-config plugins installed, though - it defines them
    // as peer dependencies.
    'airbnb',
    'airbnb/hooks',
    ...typeScriptExtensions,
  ],
  parserOptions: {
    ...typeScriptParserOptions,
  },
  // If you add rule overrides here, add code to test.js that proves you formatted it right.
  rules: {
    'class-methods-use-this': 'off',
    curly: ['error', 'all'],
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'arrow-parens': 'off',
    'jsx-a11y/label-has-associated-control': ['error', {
      labelComponents: [],
      labelAttributes: [],
      controlComponents: [],
      assert: 'htmlFor',
      depth: 25,
    }],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'no-plusplus': 'off',
    strict: 'off',
  },
};
