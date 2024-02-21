import { useState, useEffect } from 'react'

import { Analytics } from '@vercel/analytics/react'

import Footer from 'src/components/Footer/Footer'
import Nav from 'src/components/Nav/Nav'

import { LINKEDIN, GITHUB, RESUME } from '../../../public/files/data'

type PortfolioLayoutProps = {
  children?: React.ReactNode
}

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleHamburger = () => {
    setIsOpen((prevState) => !prevState)
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
      <main className="m-0 grid min-h-screen grid-cols-12 bg-white">
        <div className="relative col-span-12 m-0 bg-cream px-5 sm:m-6">
          <aside className="h-16 sm:h-24">
            <Nav isOpen={isOpen} toggleHamburger={toggleHamburger} />
          </aside>
          <div className="mx-auto max-w-[1440px] pb-24 sm:pb-0">{children}</div>
          <div className="absolute bottom-0 -ml-6 h-32 w-full md:h-16 ">
            <Footer linkedin={LINKEDIN} github={GITHUB} resume={RESUME} />
          </div>
        </div>
        <Analytics />
      </main>
    </>
  )
}

export default PortfolioLayout
