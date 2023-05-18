# unplugin-tdewolff-minify-html-literals

[![npm](https://img.shields.io/npm/v/unplugin-tdewolff-minify-html-literals)](https://www.npmjs.com/package/unplugin-tdewolff-minify-html-literals)
![minified size](https://img.shields.io/bundlephobia/min/unplugin-tdewolff-minify-html-literals)
![downloads](https://img.shields.io/npm/dt/unplugin-tdewolff-minify-html-literals)

An Vite/Rollup/Webpack/esbuild/Rspack plugin to minify HTML template literal strings.

> Not yet well tested and not recommended for production.

## Features

- This plugin uses [`@tdewolff/minify`](https://www.npmjs.com/package/@tdewolff/minify) to get significant performance gains in complex projects.
  - Try it for yourself! Clone and run `pnpm bench`
- Use [unplugin](https://github.com/unjs/unplugin) to support multiple bundlers at the same time.

## Usage

### Install

```bash
pnpm add -D unplugin-tdewolff-minify-html-literals @tdewolff/minify # pnpm
# yarn add -D unplugin-tdewolff-minify-html-literals @tdewolff/minify # yarn
# npm i -D unplugin-tdewolff-minify-html-literals @tdewolff/minify # npm
```

### Configuration

###### Vite

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import minifyHTML from 'unplugin-tdewolff-minify-html-literals/vite'

export default defineConfig({
  plugins: [
    minifyHTML({ /* options */ }),
  ],
})
```

###### Rollup

```ts
// rollup.config.js
import minifyHTML from 'unplugin-tdewolff-minify-html-literals/rollup'

export default {
  plugins: [
    minifyHTML({ /* options */ }),
  ],
}
```

###### Webpack

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-tdewolff-minify-html-literals/webpack')({ /* options */ })
  ]
}
```

###### esbuild

```ts
// esbuild.config.js
import { build } from 'esbuild'
import minifyHTML from 'unplugin-tdewolff-minify-html-literals/esbuild'

build({
  plugins: [minifyHTML()],
})
```

###### Rspack

```ts
// rspack.config.js
module.exports = {
  plugins: [
    require('unplugin-tdewolff-minify-html-literals/rspack')({ /* options */ }),
  ],
}
```

### Options

```ts
import { defineConfig } from 'vite'
import minifyHTML from 'unplugin-tdewolff-minify-html-literals/vite'

export default defineConfig({
  plugins: [
    minifyHTML({
      // minimatch of files to minify
      include: [],
      // minimatch of files not to minify
      exclude: [],
      // @tdewolff/minify config
      // https://www.npmjs.com/package/@tdewolff/minify#usage
      config: undefined,
    }),
  ],
})
```

## Credits

- The minify function uses the [`parse-literals`](https://www.npmjs.com/package/parse-literals) library and some code from [`minify-html-literals`](https://github.com/asyncLiz/minify-html-literals), marked in the source code.