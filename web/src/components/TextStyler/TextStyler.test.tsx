import { render } from '@redwoodjs/testing/web'

import TextStyler from './TextStyler'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TextStyler', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TextStyler />)
    }).not.toThrow()
  })
})
