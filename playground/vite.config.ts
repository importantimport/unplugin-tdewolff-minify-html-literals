import minifyHTML from 'unplugin-tdewolff-minify-html-literals/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    minifyHTML(),
  ],
})
