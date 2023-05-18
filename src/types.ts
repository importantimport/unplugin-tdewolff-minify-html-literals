import { FilterPattern } from 'vite'

type TdewolffConfig = {
  'css-precision': number
  'html-keep-comments': boolean
  'html-keep-conditional-comments': boolean
  'html-keep-default-attr-vals': boolean
  'html-keep-document-tags': boolean
  'html-keep-end-tags': boolean
  'html-keep-whitespace': boolean
  'html-keep-quotes': boolean
  'js-precision': number
  'js-keep-var-names': boolean
  'js-no-nullish-operator': boolean
  'json-precision': number
  'json-keep-numbers': boolean
  'svg-keep-comments': boolean
  'svg-precision': number
  'xml-keep-whitespace': boolean
}

export type Options = {
  include?: FilterPattern
  exclude?: FilterPattern
  config?: TdewolffConfig
}
