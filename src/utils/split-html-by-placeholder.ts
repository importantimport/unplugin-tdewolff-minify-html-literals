/**
 * author: `Liz Mitchell <asyncliz@gmail.com>`
 * license: `MIT`
 *
 * Splits a minfied HTML string back into an array of strings from the
 * provided placeholder. The returned array of strings should be the same
 * length as the template parts that were combined to make the HTML string.
 *
 * @param html - the html string to split
 * @param placeholder - the placeholder to split by
 * @returns an array of html strings
 * @see {@link https://github.com/asyncLiz/minify-html-literals/blob/3f53af92f0ab35eddf3d0b03bb6e676698c83d90/src/strategy.ts#L56-L65}
 */
export const splitHTMLByPlaceholder = (
  html: string,
  placeholder: string,
): string[] => {
  const parts = html.split(placeholder)
  // Make the last character (a semicolon) optional. See above.
  if (placeholder.endsWith(';')) {
    const withoutSemicolon = placeholder.slice(0, Math.max(0, placeholder.length - 1))
    for (let index = parts.length - 1; index >= 0; index--)
      parts.splice(index, 1, ...parts[index].split(withoutSemicolon))
  }
  return parts
}
