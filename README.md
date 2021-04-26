# eslint-config-aoeu

This package provides an extensible [shared configuration](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/) that supports The Art of Education University's JavaScript coding standards.

## Installation

```
yarn add -D eslint-config-aoeu
```

Or, with npm:

```
npm install -D eslint-config-aoeu
```

## Usage

Create [an ESLint configuration file](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-files) in your project. For our example below, we will use the `.eslintrc.js` format.

```js
// .eslintrc.js
module.exports = {
  extends: [
    "aoeu",
    "aoeu/react",
    "aoeu/testing"
  ]
}
```
