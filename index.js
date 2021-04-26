module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 10,
    sourceType: "module"
  },
  plugins: [
    "@babel",
    "import"
  ],
  env: {
    "es6": true,
    "node": true
  },
  ignorePatterns: [
    "**/dist/*.js"
  ],
  extends: [
    "google",
    "eslint:recommended",
    "./rules/ecmascript"
  ]
}
