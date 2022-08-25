import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withNotes } from '@storybook/addon-notes'

import { version } from '../package.json'
import "../src/web/scss/style.scss"

const contexts = [
  require.context('../src/web', true, /stories.*\.js$/),
]

configure(() => {
  contexts.forEach(context => {
    context.keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context)
  })
}, module)
