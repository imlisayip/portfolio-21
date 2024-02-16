import { render } from '@redwoodjs/testing/web'

import MediaCard from './MediaCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MediaCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MediaCard />)
    }).not.toThrow()
  })
})
