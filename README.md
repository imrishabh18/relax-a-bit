<a href="https://www.npmjs.com/package/"><img src="https://nodei.co/npm/relax-a-bit.png?downloads=true&downloadRank=true&stars=true"></a>
<a href="https://www.npmjs.org/package/relax-a-bit"><img src="https://img.shields.io/npm/v/relax-a-bit?style=flat-square&logo=npm&label=npm"></a>
<a href="https://www.npmjs.org/package/relax-a-bit"><img alt="npm" src="https://img.shields.io/npm/dt/relax-a-bit?label=npm%20downloads&style=flat-square"></a>
<a href="https://www.npmjs.org/package/relax-a-bit"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/relax-a-bit?color=brightgreen&label=package%20size&style=flat-square"></a>
# Take a break 

Take a short break and relax while the node modules are installing and your screen brightness is set to zero.

![demo](/demo.gif)

This demo ☝️ doesn't shows the exact brightness change because in screen recording the change in brightness is not reflected. Try it yourself to see. 😁

#### Install

`npm install -g relax-a-bit`

#### Usage

Run your commands prefixed with `relax`.

Example

`relax npm install`

`relax npm test`

`relax gulp build`


Or add it to `package.json`:

```json
"scripts": {
  "test": "relax ava",
  "build": "relax babel src -d lib"
}
```