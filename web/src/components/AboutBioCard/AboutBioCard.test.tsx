import { render } from '@redwoodjs/testing/web'

import AboutBioCard from './AboutBioCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AboutBioCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutBioCard />)
    }).not.toThrow()
  })
})
