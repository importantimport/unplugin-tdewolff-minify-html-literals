import type { TemplatePart } from 'parse-literals'

/**
 * author: `Liz Mitchell <asyncliz@gmail.com>`
 * license: `MIT`
 *
 * Retrieve a placeholder for the given array of template parts. The
 * placeholder returned should be the same if the function is invoked with the
 * same array of parts.
 *
 * The placeholder should be an HTML-compliant string that is not present in
 * any of the parts' text.
 *
 * @param parts - the parts to get a placeholder for
 * @returns the placeholder
 * @see {@link https://github.com/asyncLiz/minify-html-literals/blob/3f53af92f0ab35eddf3d0b03bb6e676698c83d90/src/strategy.ts#L98-L110}
 */
export const getPlaceholder = (parts: TemplatePart[]): string => {
  // Using @ and (); will cause the expression not to be removed in CSS.
  // However, sometimes the semicolon can be removed (ex: inline styles).
  // In those cases, we want to make sure that the HTML splitting also
  // accounts for the missing semicolon.
  const suffix = '();'
  let placeholder = '@TEMPLATE_EXPRESSION'
  while (parts.some(part => part.text.includes(placeholder + suffix)))
    placeholder += '_'

  return placeholder + suffix
}
