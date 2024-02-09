// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Icon>

export const Burger: Story = {
  args: {
    id: 'burger',
  },
}

export const CloseX: Story = {
  args: {
    id: 'closex',
  },
}

export const Bulge: Story = {
  args: {
    id: 'bulge',
    size: 600,
  },
}
