import { Router } from "@reach/router";

import Nav from './components/organisms/Nav/Nav'
import Footer from './components/organisms/Footer/Footer'

import About from './pages/About'
import Work from './pages/Work'

export function App() {
  return (
    <>
      <Nav />
      <h1 className="text-blue-600 text-xl">Hello, world!</h1>
      <Router>
        <Work path="/" />
        <About path="/about" />
      </Router>
      <Footer />
    </>
  )
}
