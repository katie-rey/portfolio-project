import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import Typical from 'react-typical'
import About from './About'
import Footer from './Footer'
import Portfolio from './Portfolio'
import Contact from './ContactForm'

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
    <div className="header-wrapper">
      <div className="main-info">
        <div className="profile-container">
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
                    <Typical
                      loop={Infinity}
                      steps={[
                        'Enthusiastic Dev',
                        1000,
                        'Full Stack Developer',
                        1000,
                        'React/Redux',
                        1000,
                        'Javascript',
                        1000,
                      ]}
                    />
                  </h1>
                </span>
                <span className="profile-role-tagline">
                  Building full stack react websites through Dev Academy teachings
                </span>
              </div>
              <div className="profile-options">
                <button className="btn btn-dark highlighted-btn">Hire Me</button>
                <a href="#" className="resume primary-text" download="Katie katie-rey-cv">
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

      <div className="skills-wrapper">
        {/* <div className="about-details-stack"> */}
        <span className="techstack-text">
          Javascript · React · Redux · webpack · node · npm · Express · SQLite3 · MongoDB · Netlify
          · Github
        </span>
        <span className="primary-text">HTML · CSS · Bootstrap · MUI · Bulma · Flowbite </span>

        {/* <div class="arrow-up"></div> */}
        {/* </div> */}
      </div>

      <About />
      <Portfolio />
      {/* <Contact /> */}
    </div>
  )
}
