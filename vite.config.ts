import { builtinModules } from 'node:module'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve('src/index.ts'),
        resolve('src/rollup.ts'),
        resolve('src/vite.ts'),
        resolve('src/webpack.ts'),
        resolve('src/rspack.ts'),
      ],
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        ...builtinModules,
        ...builtinModules.map(m => `node:${m}`),
        '@rollup/pluginutils',
        '@tdewolff/minify',
        'magic-string',
        'parse-literals',
        'unplugin',
      ],
    },
  },
  plugins: [dts()],
})
