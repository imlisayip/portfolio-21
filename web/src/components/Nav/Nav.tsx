import { useState } from 'react'

import Hamburger from '../Hamburger/Hamburger'

const Nav = () => {
  const [isHamburger, setIsHamburger] = useState(true)

  const toggleNav = () => {
    setIsHamburger((prevValue) => !prevValue)
  }

  return (
    <>
      <div
        className={`bg-red flex  h-screen  w-[460px] flex-col justify-between  bg-amber-600 px-12 pb-12 pt-[160px] transition-transform duration-300 ${
          isHamburger ? 'translate-x-[100%]' : 'translate-x-[220%]'
        }`}
      >
        <nav>
          <ul>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">TBD</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="absolute right-8 top-6">
        <Hamburger isHamburger={isHamburger} toggleNav={toggleNav} />
      </div>
    </>
  )
}

export default Nav
