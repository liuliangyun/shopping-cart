module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:testing-library/react"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "testing-library",
    "jest-dom",
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "no-unused-vars":"warn",
    "react/prop-types": "off",
    "testing-library/no-render-in-setup": "off",
    "testing-library/no-node-access": "off"
  
  }
}

