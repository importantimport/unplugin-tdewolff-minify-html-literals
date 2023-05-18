import type { TemplatePart } from 'parse-literals'

/**
 * author: `Liz Mitchell <asyncliz@gmail.com>`
 * license: `MIT`
 * @see {@link https://github.com/asyncLiz/minify-html-literals/blob/3f53af92f0ab35eddf3d0b03bb6e676698c83d90/src/strategy.ts#L111-L113}
 */
export const combineHTMLStrings = (
  parts: TemplatePart[],
  placeholder: string,
): string => parts.map(({ text }) => text).join(placeholder)
