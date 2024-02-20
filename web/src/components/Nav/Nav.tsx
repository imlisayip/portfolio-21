import { useLayoutEffect } from 'react'

import { Link } from '@redwoodjs/router'

const Nav = ({ isOpen, toggleHamburger }) => {
  useLayoutEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      return () => (document.body.style.overflow = originalStyle)
    }
  }, [isOpen])

  return (
    <>
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
