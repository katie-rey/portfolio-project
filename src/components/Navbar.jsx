import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import About from '../components/About'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { changeTheme } from '../features/theme/themeSlice'

function Navbar() {
  const [checked, setChecked] = useState(false)
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setChecked(e.target.checked)
    console.log(checked)
    dispatch(changeTheme(checked))
  }

  console.log(theme)

  return (
    <nav
      fixed="top"
      className="navbar navbar-custom fixed-top navbar-expand-lg  justify-content-end"
    >
      <div className="container ">
        {/* <div className="container-fluid justify-content-end"> */}
        <a className="navbar-brand d-flex align-items-center" href={Navbar}>
          Katie Rey
        </a>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} defaultChecked />}
            label="Fun Mode"
          />
        </FormGroup>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={Navbar}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </div>
    </nav>
  )
}
export default Navbar
