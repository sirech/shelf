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
    ]
  },
  "extends": [
    "standard",
    "standard-react"
  ],
  "plugins": [
    "standard",
    "react"
  ]
};
