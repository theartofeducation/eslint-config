module.exports = {
  rules: {
    "react/jsx-closing-bracket-location": ["error", "after-props"],
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
