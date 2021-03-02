# eslint-config-base

![npm](https://img.shields.io/npm/v/@saulmaldonado/eslint-config-base?color=CB3837&logo=npm&style=for-the-badge)

Base JavaScript ESLint config for saulmaldonado's style guide

## Setup

### 1) Install

```
npm install @saulmaldonado/eslint-config-base -D
```

or

```
yarn add @saulmaldonado/eslint-config-base -D
```

### 2) Install Plugins

If PeerDependencies are not automatically installed, install the required ESList plugins

```
npm install eslint-plugin-import -D
```

or

```
yarn add eslint-plugin-import -D
```

### 3) Configure config

Add `"extends": "@saulmaldonado/eslint-config-base"` to ESList config file.

Example:

```js
// .eslintrc.js

module.exports = {
  extends: ['@saulmaldonado/eslint-config-base'],
};
```
