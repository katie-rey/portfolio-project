import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import About from '../components/About'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { alpha, styled } from '@mui/material/styles'
import { pink } from '@mui/material/colors'
import { changeTheme } from '../features/theme/themeSlice'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

function Navbar() {
  const [checked, setChecked] = useState(false)
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  useEffect(() => {
    document.addEventListener('scroll', () => {
      let navbar = document.querySelector('.navbar')
      if (window.scrollY > 150) {
        navbar?.classList.add('scrolled')
      } else {
        navbar?.classList.remove('scrolled')
      }
    })
  }, [])

  const handleChange = (e) => {
    setChecked(e.target.checked)
    console.log(checked)
    dispatch(changeTheme(checked))
  }

  const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#fc6894',
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#fc6894',
    },
  }))

  return (
    <div className="nav-container">
      <nav
        id="navbar"
        fixed="top"
        className="navbar navbar-custom fixed-top navbar-expand-lg  d-flex justify-content-end"
      >
        <div className="container ">
          {/* <div className="container-fluid justify-content-end"> */}
          <a className="navbar-brand d-flex align-items-center" href="#profile-container">
            Katie Rey
          </a>

          <div className="checked">
            <FormGroup>
              <FormControlLabel
                control={
                  <PinkSwitch
                    style={checked ? { color: '#fc6894)' } : { color: '#fff' }}
                    className="switch"
                    checked={checked}
                    onChange={handleChange}
                    defaultChecked
                  />
                }
                label="Fun Mode"
              />
            </FormGroup>
          </div>
          <button
            className="navbar-toggler ml-auto "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: '#ffffff' }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#header-wrapper">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-side">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio-bottom">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <FaGithub size={30} />
                </a>
              </li>
              <li className="nav-item"> {''}</li>
              <li className="nav-item"> {''}</li>
              <li className="nav-item"> {''}</li>
              <li className="nav-item"> {''}</li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <FaLinkedin size={30} />
                </a>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </div>
      </nav>
    </div>
  )
}
export default Navbar
