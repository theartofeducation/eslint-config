module.exports = {
  rules: {
    "complexity": ["error", { max: 10 }],
    "max-len": ["warn", { "code": 100 }],
    "semi": ["error", "never"],
    "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "arrow-body-style": "off",
    "camelcase": "warn",
    "func-names": "off",
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": ["error", "never"],
    "indent": ["error", 2, {
      "FunctionDeclaration": {
        "body": 1,
        "parameters": 2
      },
      "SwitchCase": 1
    }],
    "object-curly-spacing": ["error", "always"],
    "global-require": "warn",
    "import/no-dynamic-require": "warn",
    "import/no-extraneous-dependencies": "off",
    "import/order": ["error", {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "object", "type", "unknown"],
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      },
      "newlines-between": "never"
    }],
    "no-console": "off",
    "no-multi-assign": "off",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "no-param-reassign": "warn",
    "no-plusplus": "off",
    "no-shadow": "warn",
    "no-underscore-dangle": "warn",
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
    "no-nested-ternary": "off",
    "no-unused-vars": "warn",
    "no-invalid-this": "off",
    "prefer-destructuring": "off",
    "require-jsdoc": "off",
    "valid-jsdoc": "off"
  }
}
