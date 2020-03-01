module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es2020': true,
    'node': true,
    'jest': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors'
  ],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': [
    'react',
    'import',
    'jsx-a11y'
  ],
  'rules': {
    /* REGULAR */
    'array-bracket-spacing': [ 'error', 'always', {
      'objectsInArrays': false
    }],
    'arrow-body-style': [ 'error', 'always' ],
    'arrow-spacing': 'error',
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs', {
      'allowSingleLine': true
    }],
    'comma-dangle': [ 'error', 'never' ],
    'comma-spacing': [ 'error', {
      'before': false,
      'after': true
    }],
    'comma-style': [ 'error', 'last' ],
    'default-case': 'error',
    'dot-notation': [ 'error', {
      'allowKeywords': true
    }],
    'indent': [ 'error', 2 ],
    'jsx-quotes': [ 'error', 'prefer-double' ],
    'keyword-spacing': [ 'error', {
      'before': true,
      'after': true
    }],
    'newline-per-chained-call': [ 'error', {
      'ignoreChainWithDepth': 2
    }],
    'no-console': [ 'warn', {
      'allow': [ 'warn', 'error' ]
    }],
    'no-duplicate-imports': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-lone-blocks': 'error',
    'no-multi-spaces': 'error',
    'no-script-url': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-vars': [ 'error', {
      'vars': 'local',
      'varsIgnorePattern': '^(React|e|i|it|expect)$',
      'argsIgnorePattern': '^(props|error|reject|response|dispatch|getState)$'
    }],
    'no-useless-concat': 'error',
    'no-var': 'error',
    'object-curly-newline': [ 'warn', {
      'ObjectExpression': {
        'multiline': true,
        'minProperties': 1
      },
      'ObjectPattern': {
        'consistent': true
      }
    }],
    'object-property-newline': 'error',
    'object-curly-spacing': [ 'error', 'always', {
      'arraysInObjects': false,
      'objectsInObjects': false
    }],
    'one-var': [ 'error', {
      'var': 'never',
      'let': 'never',
      'const': 'never'
    }],
    'prefer-destructuring': [ 'error', {
      'object': true,
      'array': false
    }],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'never' ],
    'space-before-function-paren': [ 'error', {
      'anonymous': 'never',
      'named': 'never'
    }],
    'space-in-parens': [ 'error', 'always', {
      'exceptions': [ '{}' ]
    }],
    'spaced-comment': [ 'error', 'always' ],
    'wrap-regex': 'error',
    'yoda': 'error',

    /* REACT */
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'warn',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': [ 'error', 'always' ],
    'react/prop-types': 'warn',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',

    /* REACT/JSX */
    'react/jsx-boolean-value': 'warn',
    'react/jsx-closing-bracket-location': [ 1, 'line-aligned' ],
    'react/jsx-curly-spacing': [ 'error', 'never' ],
    'react/jsx-equals-spacing': [ 'error', 'never' ],
    'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
    'react/jsx-indent-props': [ 'error', 2 ],
    'react/jsx-indent': [ 'error', 2 ],
    'react/jsx-max-props-per-line': [ 'warn', {
      'maximum': 4
    }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-tag-spacing': [ 'error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never'
    }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': [ 'error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line'
    }]
  }
}
