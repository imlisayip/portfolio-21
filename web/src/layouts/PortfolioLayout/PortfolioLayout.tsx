import { useState, useEffect } from 'react'

import ErrorBoundary from 'src/components/ErrorBoundary/ErrorBoundary'
import Footer from 'src/components/Footer/Footer'
import Nav from 'src/components/Nav/Nav'
import StructuredData from 'src/components/StructuredData/StructuredData'

import { LINKEDIN, GITHUB, RESUME } from 'src/lib/data'

type PortfolioLayoutProps = {
  children?: React.ReactNode
}

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const toggleHamburger = () => {
    setIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const hideMenu = () => {
      if (window.innerWidth > 640 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  }, [isOpen, isMounted])

  // Performance monitoring
  useEffect(() => {
    if (!isMounted) return

    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.loadEventStart);
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
      return () => observer.disconnect();
    }
  }, [isMounted]);

  return (
    <>
      <StructuredData type="person" />
      <main className="m-0 grid min-h-screen grid-cols-12 bg-white">
        <div className="relative col-span-12 m-0 bg-cream px-5 sm:m-6">
          <aside className="h-16 sm:h-24">
            <Nav isOpen={isOpen} toggleHamburger={toggleHamburger} />
          </aside>
          <div className="mx-auto max-w-[1280px] pb-24 sm:pb-0">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </div>
          <div className="absolute bottom-0 -ml-6 h-32 w-full md:h-16 ">
            <Footer linkedin={LINKEDIN} github={GITHUB} resume={RESUME} />
          </div>
        </div>
      </main>
    </>
  )
}

export default PortfolioLayout
