# @aoeu/eslint-config

This package provides an extensible [shared configuration](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/) that supports The Art of Education University's JavaScript coding standards.

## Installation

```
yarn add -D @aoeu/eslint-config
```

Or, with npm:

```
npm install -D @aoeu/eslint-config
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
