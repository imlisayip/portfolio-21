import { useState } from 'react'

import { useLayoutEffect } from 'react'

import { Link } from '@redwoodjs/router'

import Hamburger from '../Hamburger/Hamburger'

const Nav = ({ isOpen, toggleHamburger }) => {
  const [isHamburger, setIsHamburger] = useState(true)

  const toggleNav = () => {
    setIsHamburger((prevValue) => !prevValue)
  }


  useLayoutEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      return () => (document.body.style.overflow = originalStyle)
    }
  }, [isOpen])

  const handleKeyDown = (event) => {
    // Check if 'Enter' or 'Space' key is pressed
    if (event.key === 'Enter' || event.key === ' ') {
      toggleHamburger()
    }
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
      <nav
        className="relative flex h-16 items-center justify-between sm:h-24"
        role="navigation"
      >
        <h3>
          <Link to="/" className="font-heading">
            LY
          </Link>
        </h3>
        <div
          className="cursor-pointer md:hidden"
          onClick={toggleHamburger}
          // onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className={`hamburger hamburger--elastic ${
              isOpen ? 'is-active' : ''
            }`}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="hidden md:block">
          <h3>
            <Link className="p-4 font-heading" to="/">
              work
            </Link>
            <Link className="p-4 font-heading" to="/about">
              about
            </Link>
          </h3>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute -ml-[1.25rem] max-h-screen w-full">
          <div
            className="grid auto-rows-min grid-rows-12 items-center bg-cream text-center"
            onClick={toggleHamburger}
            tabIndex={0}
          >
            <div className="row-span-1"></div>
            <Link className="text-md row-span-1 py-4 font-heading" to="/">
              <h3>work</h3>
            </Link>
            <Link className="text-md row-span-1 py-4 font-heading" to="/about">
              <h3>about</h3>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Nav
