import { render } from '@redwoodjs/testing/web'

import ClickToCopy from './ClickToCopy'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ClickToCopy', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClickToCopy />)
    }).not.toThrow()
  })
})
