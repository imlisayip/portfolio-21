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

import MediaCard from './MediaCard'

const meta: Meta<typeof MediaCard> = {
  component: MediaCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof MediaCard>

export const LeftMedia: Story = {
  args: {
    direction: 'left',
    heading: 'Heading',
    body: 'body',
    cta: 'call to action',
    image: 'https://fakeimg.pl/600x400',
    alt: 'Image Placeholder',
  },
}

export const RightMedia: Story = {
  args: {
    direction: 'right',
    heading: 'Heading',
    body: 'body',
    cta: 'call to action',
    image: 'https://fakeimg.pl/600x400',
    alt: 'Image Placeholder',
  },
}
