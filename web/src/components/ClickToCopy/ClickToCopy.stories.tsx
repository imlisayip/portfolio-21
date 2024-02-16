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

import ClickToCopy from './ClickToCopy'

const meta: Meta<typeof ClickToCopy> = {
  component: ClickToCopy,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ClickToCopy>

export const Primary: Story = { args: { text: 'hello@lisayip.com' } }
