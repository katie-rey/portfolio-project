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
  return (
    <>
      <Navbar fixed="top" />
      {/* <ParticlesContainer /> */}
      <Header />
      {/* <About /> */}
      {/* <Portfolio /> */}
    </>
  )
}

export default App
