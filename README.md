# MapConvert

convert data structure to definition schema.

[![NPM version](https://img.shields.io/npm/v/map-convert.svg?style=flat-square)](https://www.npmjs.com/package/map-convert)
[![Build Status](https://travis-ci.org/JhinDeng/map-convert.svg?branch=master)](https://travis-ci.org/JhinDeng/map-convert)
[![Coverage Status](https://coveralls.io/repos/github/JhinDeng/map-convert/badge.svg?branch=master)](https://coveralls.io/github/JhinDeng/map-convert?branch=master)

> inspired by [map-transform](https://www.npmjs.com/package/map-transform), but map-transform is too complex to use to me. so I implement a simple one.

## Usage

```javascript
var mapConvert = require('map-convert')
var source = {
  name: 'Jhin',
  hello: {
    world: 'hello world'
  }
}

var def = '{name} say {hello.world}!'
mapConvert(source, def)
// => 'Jhin say hello world!'

var def2 = { id: 1, name: '{name}Deng', say: '{hello.world}!' }
mapConvert(source, def2)
// => { id: 1, name: 'JhinDeng', say: 'hello world!' }

var def3 = [def2, { id: 2, name: 'alex', say: 'wow!' }]
mapConvert(source, def3)
/* =>
 [
    { id: 1, name: 'JhinDeng', say: 'hello world!' },
    { id: 2, name: 'alex', say: 'wow!' }
  ]
 */
```

the result will always be what definition schema looks like.

## Contributing

- suggestions welcome
- contributions welcome
