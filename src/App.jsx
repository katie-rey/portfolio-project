import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Contact from './components/Contact'
import PortfolioCard from './components/PortfolioCard'
import PortfolioCardItem from './components/PortfolioCardItem'
import SiteUnavailable from './components/SiteUnavailable'

function App() {
  const [theme, setTheme] = useState('light')

  console.log('hello test')
  return (
    <Router>
      <Navbar fixed="top" />
      {/* <ParticlesContainer /> */}
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/Card " element={<PortfolioCardItem />} />
        <Route path="/unavailable" element={<SiteUnavailable />} />
      </Routes>
      {/* <Contact /> */}
      <Footer />
    </Router>
  )
}

export default App
