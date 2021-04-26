module.exports = {
  plugins: [
    "jest"
  ],
  env: {
    "jest/globals": true
  },
  extends: [
    "plugin:testcafe/recommended",
    "./rules/testing-unit",
    "./rules/testing-e2e"
  ]
}
