// export { default } from '@importantimport/eslint-config'

import config from '@importantimport/eslint-config'

export default [
  ...config,
  {
    rules: {
      'import/default': 'off',
    },
  },
  {
    ignores: ['**/my-element.ts'],
  },
]
