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

import TextStyler from './TextStyler'

const meta: Meta<typeof TextStyler> = {
  component: TextStyler,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TextStyler>

export const H1: Story = {
  args: {
    level: 1,
    text: 'the brown fox jumps over the lazy dog',
  },
}
export const H2: Story = {
  args: {
    level: 2,
    text: 'the brown fox jumps over the lazy dog',
  },
}
export const H3: Story = {
  args: {
    level: 3,
    text: 'the brown fox jumps over the lazy dog',
  },
}
export const H4: Story = {
  args: {
    level: 4,
    text: 'the brown fox jumps over the lazy dog',
  },
}
export const H5: Story = {
  args: {
    level: 5,
    text: 'the brown fox jumps over the lazy dog',
  },
}
export const H6: Story = {
  args: {
    level: 6,
    text: 'the brown fox jumps over the lazy dog',
  },
}
