import React from 'react'
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

function App() {
  console.log('hello test')
  return (
    <Router>
      <Navbar fixed="top" />
      {/* <ParticlesContainer /> */}
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
