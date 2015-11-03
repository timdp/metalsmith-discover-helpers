# metalsmith-discover-helpers

[![npm](https://img.shields.io/npm/v/metalsmith-discover-helpers.svg)](https://www.npmjs.com/package/metalsmith-discover-helpers) [![Dependencies](https://img.shields.io/david/timdp/metalsmith-discover-helpers.svg)](https://david-dm.org/timdp/metalsmith-discover-helpers) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

Discovers your template helpers and registers them with Handlebars.

## Usage

In `metalsmith.json`:

```json
{
  "plugins": {
    "metalsmith-discover-helpers": {
      "directory": "helpers",
      "pattern": "/\\.js$/"
    }
  }
}
```

Using Metalsmith's API:

```js
var discoverHelpers = require('metalsmith-discover-helpers')

require('metalsmith')(__dirname)
  .use(discoverHelpers({
    directory: 'helpers',
    pattern: /\.js$/
  }))
  .build()
```

The displayed values for `directory` and `pattern` are the defaults. If you
don't need to change them, you can just leave them out.

## Author

[Tim De Pauw](https://tmdpw.eu/)

## License

MIT
