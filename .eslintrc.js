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
  ],
  plugins: ['simple-import-sort'],
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
    'simple-import-sort/imports': [
      'error', {
        groups: [
          // These packages provide polyfills so should always be first
          ['core-js', 'regenerator-runtime'],
          // React packages should come at the top
          ['^react$', '^react-dom$', '^prop-types'],
          // Non-react third-party packages come next
          ['^@?\\w'],
          // Packages from the @edx namespace come after that
          ['^@edx?\\w'],
          // Finally we have internal, relative imports
          ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'no-plusplus': 'off',
    strict: 'off',
  },
};
