import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-end">
      <div className="container ">
        {/* <div className="container-fluid justify-content-end"> */}
        <a className="navbar-brand d-flex align-items-center" href={Navbar}>
          Katie Rey
        </a>
        <button
          className="navbar-toggler ml-auto "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#ffff' }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href={Navbar}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={Navbar}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={Navbar}>
                Portfolio
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
