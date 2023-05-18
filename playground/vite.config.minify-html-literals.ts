import minifyHTML from 'rollup-plugin-minify-html-literals'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (minifyHTML as unknown as { default: any }).default(),
  ],
})
