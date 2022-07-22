import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
// import Typical from 'react-typical'
import About from './About'
import Footer from './Footer'
import Portfolio from './Portfolio'
import Contact from './Contact'
import TypeAnimation from 'react-type-animation'

// const ParticlesContainer = () => {

export default function Header() {
  const theme = useSelector((state) => state.theme.value)

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  const particlesLoaded = (container) => {
    console.log(container)
  }
  return (
    <div id="header-wrapper" className="header-wrapper">
      <div className="main-info">
        <div id="profile-container" className="profile-container">
          <div className="profile-parent">
            <div className="profile-details">
              <div className="colz">
                <div className="colz-icon">
                  <a href="#">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-github-square"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter-square"></i>
                  </a>
                </div>
              </div>
              <div className="profile-details-name">
                <span className="primary-text">
                  {' '}
                  Hello, I'm <span className="highlighted-text">Katie</span>
                </span>
              </div>
              <div className="profile-details-role">
                <span className="primary-text">
                  {' '}
                  <h1>
                    <TypeAnimation
                      className="type-animation"
                      cursor={true}
                      sequence={[
                        'Enthusiastic Dev',
                        1000,
                        'Full-Stack Developer',
                        1000,
                        'React/Redux',
                        1000,
                        'Javascript',
                        1000,
                      ]}
                      wrapper="a"
                      repeat={3}
                    />
                  </h1>
                </span>
                <span className="profile-role-tagline">
                  Building front-end and full-stack react web apps
                </span>
              </div>
              <div className="profile-options">
                <a href="#contact" className="resume primary-text">
                  <button className="btn btn-dark highlighted-btn">Hire Me</button>
                </a>

                <a href="katie-rey-dev.pdf" className="resume primary-text" download="katie-rey-cv">
                  <button className="btn btn-dark highlighted-btn ">Get Resume</button>
                </a>
              </div>
            </div>
            <div className="profile-picture">
              <div className="profile-picture-background"></div>
            </div>
          </div>
        </div>
      </div>
      {theme === false ? (
        <Particles
          className="tsparticles"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 80,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#fc6894',
              },
              links: {
                color: '#fc6894',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'triangle',
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      ) : (
        <></>
      )}

      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}
