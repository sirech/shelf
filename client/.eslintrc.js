module.exports = {
  env: {
    es6: true,
    mocha: true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "jsx-quotes": [
      "error",
      "prefer-single"
    ],
    "indent": [
      "error",
      2,
      { "SwitchCase": 0 }
    ]
  },
  "extends": [
    "standard",
    "standard-react"
  ],
  "plugins": [
    "standard",
    "react"
  ],
  "globals": {
    "INITIAL_DATA": true,
    "expect": true
  }
};
