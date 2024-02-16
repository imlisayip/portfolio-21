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

export const Text: Story = {
  args: {
    children: 'the brown fox jumps over the lazy dog',
  },
}

export const TextWithCaret: Story = {
  args: {
    caret: true,
    children: 'the brown fox jumps over the lazy dog',
  },
}

export const TextWithCaretAndHighlight: Story = {
  args: {
    caret: true,
    children: 'the brown fox jumps over the lazy dog',
    highlight: true,
  },
}

export const Link: Story = {
  args: {
    link: '#',
    children: 'the brown fox jumps over the lazy dog',
  },
}

export const LinkWithCaret: Story = {
  args: {
    caret: true,
    link: '#',
    children: 'the brown fox jumps over the lazy dog',
  },
}

export const LinkWithCaretAndHighlight: Story = {
  args: {
    caret: true,
    link: '#',
    children: 'the brown fox jumps over the lazy dog',
    highlight: true,
  },
}
