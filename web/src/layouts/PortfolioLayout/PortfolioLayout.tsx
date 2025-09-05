import { useState, useEffect } from 'react'

import { Analytics } from '@vercel/analytics/react'

import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import StructuredData from '../../components/StructuredData/StructuredData'

import { LINKEDIN, GITHUB, RESUME } from '../../lib/data'

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
  }, [isOpen])

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window && 'PerformanceObserver' in window) {
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
  }, []);

  return (
    <>
      <StructuredData type="person" />
      <main className="m-0 grid min-h-screen grid-cols-12 bg-white">
        <div className="relative col-span-12 m-0 bg-cream px-5 sm:m-6 md:border-b-[24px] md:border-white">
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
        <Analytics />
      </main>
    </>
  )
}

export default PortfolioLayout
