import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import Navbar from './components/Navbar/Navbar'
import Dropdown from './components/Dropdown/Dropdown'
import Footer from './components/Footer/Footer'

import About from './pages/About'
import Work from './pages/Work'
import Headroom from "react-headroom";

export function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 640 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <>
      <Headroom>
        <Navbar isOpen={isOpen} toggle={toggle} />
        {isOpen && <Dropdown isOpen={isOpen} toggle={toggle} />}
      </Headroom>
      <div className="sm:mx-6 sm:mb-6 py-6 px-5 bg-cream">
        <div className="max-w-screen-lg mx-auto">
          <Router primary={false} >
            <Work path="/" />
            <About path="about" />
          </Router>
          <Footer />
        </div>
      </div>
    </>
  )
}
