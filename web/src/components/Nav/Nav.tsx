import { useEffect } from 'react'

import { Link } from '@redwoodjs/router'

const Nav = ({ isOpen, toggleHamburger }) => {
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [isOpen])

  return (
    <>
      <nav
        className="relative flex h-16 items-center justify-between sm:h-24 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <h3>
          <Link to="/" className="font-heading" aria-label="Lisa Yip - Home">
            LY
          </Link>
        </h3>
        <div
          className="cursor-pointer md:hidden"
          onClick={toggleHamburger}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggleHamburger()
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <button
            className={`hamburger hamburger--elastic ${
              isOpen ? 'is-active' : ''
            }`}
            type="button"
            aria-label="Menu"
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
        <div
          className="bg-cream absolute top-0 left-0 w-full h-screen z-40"
          id="mobile-menu"
          aria-label="Mobile navigation menu"
        >
          <div
            className="flex flex-col items-center justify-center bg-cream text-center h-full"
            onClick={toggleHamburger}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                toggleHamburger()
              }
            }}
            tabIndex={0}
          >
            <div className="flex-1"></div>
            <Link className="text-md py-4 font-heading" to="/">
              <h3>work</h3>
            </Link>
            <Link className="text-md py-4 font-heading" to="/about">
              <h3>about</h3>
            </Link>
            <div className="flex-1"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default Nav
