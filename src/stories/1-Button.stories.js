import React from 'react'
import { Button } from 'components'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Button'
}

export const good = () => (
  <Button>
    <span role="img" aria-label="angel">
      😇
    </span>
  </Button>
)

export const bad = () => (
  <Button onClick={action('click')}>
    <span role="img" aria-label="angel">
      😈
    </span>
  </Button>
)
