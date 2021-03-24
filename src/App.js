import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import Navbar from './components/organisms/Navbar/Navbar'
import Dropdown from './components/organisms/Dropdown/Dropdown'
import Footer from './components/organisms/Footer/Footer'

import About from './pages/About'
import Work from './pages/Work'

export function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 640 && isOpen) {
        setIsOpen(false)
        console.log('i resized');
      }
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <div className="m-6 p-6 bg-blue-200">
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Router>
        <Work path="/" />
        <About path="/about" />
      </Router>
      <Footer />
    </div>
  )
}
