import { render } from '@redwoodjs/testing/web'

import Eyebrow from './Eyebrow'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Eyebrow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Eyebrow />)
    }).not.toThrow()
  })
})
