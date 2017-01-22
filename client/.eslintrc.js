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
    "array-bracket-spacing": ["off"],
    "object-curly-spacing": ["off"],
    "max-len": ["off"],
    "no-param-reassign": ["warn"],
    "import/no-extraneous-dependencies": ["off"],
    "import/prefer-default-export": ["warn"],
    "react/forbid-prop-types": ["error", { "forbid": ["any", "array"]}],
    "react/jsx-filename-extension": ["off"]
  },
  "extends": [
    "airbnb",
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
