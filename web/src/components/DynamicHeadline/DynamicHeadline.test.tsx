import { render } from '@redwoodjs/testing/web'

import DynamicHeadline from './DynamicHeadline'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Dynamic Headline', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DynamicHeadline />)
    }).not.toThrow()
  })
})
