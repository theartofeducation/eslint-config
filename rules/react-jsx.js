module.exports = {
  rules: {
    "react/jsx-closing-bracket-location": ["error", "after-props"],
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": true
    }],
    "react/jsx-max-props-per-line": ["error", {
      "maximum": 2,
      "when": "always"
    }],
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn", {
        "additionalHooks": "useRecoilCallback"
      }
    ],
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-associated-control": ["error", {
      "labelComponents": ["CustomInputLabel"],
      "labelAttributes": ["label"],
      "controlComponents": ["CustomInput"],
      "depth": 3
    }],
    "jsx-a11y/anchor-is-valid": "off"
  }
}
