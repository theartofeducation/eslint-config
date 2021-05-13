# @aoeu/eslint-config

This package provides an extensible [shared configuration](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/) that supports The Art of Education University's JavaScript coding standards.

## Installation

```
yarn add -D eslint @aoeu/eslint-config @babel/eslint-plugin eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-mdx eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-testcafe
```

Or, with npm:

```
npm install -D eslint @aoeu/eslint-config @babel/eslint-plugin eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-mdx eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-testcafe
```

## Usage

Create [an ESLint configuration file](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-files) in your project. For our example below, we will use the `.eslintrc.js` format.

```js
// .eslintrc.js
module.exports = {
  extends: [
    "@aoeu/eslint-config",
    "@aoeu/eslint-config/react",
    "@aoeu/eslint-config/testing"
  ]
}
```
