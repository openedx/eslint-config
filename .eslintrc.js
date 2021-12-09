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
    'function-paren-newline': ['error', 'consistent'],
    'function-call-argument-newline': ['off', 'consistent'],
    'react/function-component-definition': ['off', {
      namedComponents: 'function-expression',
      unnamedComponents: 'function-expression',
    }],
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
    'react/no-unstable-nested-components': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-unused-class-component-methods': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/no-invalid-html-attribute': 'off',
    'no-plusplus': 'off',
    'no-promise-executor-return': 'off',
    'prefer-regex-literals': 'off',
    strict: 'off',
  },
};
