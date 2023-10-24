import Nav from './components/Nav.jsx'
import './App.css'
import Portfolio from './pages/Portfolio.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  const location = useLocation()

  return (
    <>
      <div className="w-11/12 md:container mx-auto h-screen pt-5 overflow-hidden">
        <Nav />

        <div className="flex flex-row items-center justify-center min-h-full text-light-tan-0 overflow-hidden">
          <AnimatePresence>
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Layout />}>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default App
