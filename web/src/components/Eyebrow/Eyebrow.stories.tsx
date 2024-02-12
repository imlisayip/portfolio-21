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

import Eyebrow from './Eyebrow'

const meta: Meta<typeof Eyebrow> = {
  component: Eyebrow,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Eyebrow>

export const Primary: Story = {
  args: {
    text: 'eyebrow',
  },
}
