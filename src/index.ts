import { createFilter } from '@rollup/pluginutils'
// @ts-expect-error ts(7016)
import { config } from '@tdewolff/minify'
import { createUnplugin } from 'unplugin'

import type { Options } from './types'
import { minifyHTMLLiterals } from './utils/minify-html-literals'

export default createUnplugin<Options | undefined>((options) => {
  const filter = createFilter(
    options?.include ?? [/\.[jt]s$/],
    options?.exclude,
  )
  return {
    buildStart: () => config({ ...options?.config }),
    name: 'tdewolff-minify-html-literals',
    transform: (code, id) => minifyHTMLLiterals(code, id),
    transformInclude: id => filter(id),
  }
})
