# Take a break 

Take a short break and relax while the node modules are installing and your screen brightness is set to zero.

![demo](/demo.gif)

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