// @ts-expect-error ts(7016)
import { string } from '@tdewolff/minify'
import MagicString from 'magic-string'
import { parseLiterals } from 'parse-literals'

import { combineHTMLStrings } from './combine-html-strings'
import { getPlaceholder } from './get-placeholder'
import { splitHTMLByPlaceholder } from './split-html-by-placeholder'

export const minifyHTMLLiterals = (code: string, id?: string): string => {
  const templates = parseLiterals(code, { fileName: id })
  const ms = new MagicString(code)

  for (const template of templates) {
    const tag = template.tag?.toLowerCase() ?? ''
    if (['html', 'css'].includes(tag)) {
      const placeholder = getPlaceholder(template.parts)
      const combined = combineHTMLStrings(template.parts, placeholder)
      let min = ''
      if (tag.includes('html'))
        min = string('text/html', combined)
      else if (tag.includes('css'))
        min = string('text/css', combined)

      const minParts = splitHTMLByPlaceholder(min, placeholder)

      for (const [index, part] of template.parts.entries()) {
        if (part.start < part.end)
          ms.overwrite(part.start, part.end, minParts[index])
      }
    }
  }

  return ms.toString()
}
