module.exports = {
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y"
  ],
  env: {
    "browser": true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "plugin:react/recommended",
    "plugin:jsx-a11y/strict",
    "./rules/react-jsx"
  ]
}
