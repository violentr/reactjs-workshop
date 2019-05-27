module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "eslint:recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
          "jsx": true,
          "sourceType": "module"
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
  "rules": {
    "indent": [
      2,
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "quotes": [
      2,
      "single"
    ],
    "camelcase": 1,
    "keyword-spacing": 1,
    "arrow-body-style": 1,
    "arrow-spacing": 1,
    "no-var": 1,
    "no-tabs": 2,
    //React
    "react/prefer-es6-class": 1,
    "react/prefer-stateless-function": 1,
    "react/jsx-uses-vars": 1,
    "react/react-in-jsx-scope": 1,
    "react/jsx-uses-react": 1
  }
};
