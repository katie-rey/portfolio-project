import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="footer-container ">
      <div className="footer-links">
        <span>katierey@hotmail.com</span>
        <span>+64 21 743 855</span>
      </div>
      <div className="footer-logo"></div>
      <div className="footer-social">
        <a className="footer-link" href="https://github.com/katie-rey">
          <FaGithub size={40} />
        </a>
        <a className="footer-link" href="https://www.linkedin.com/in/katie-rey-7425a530/">
          <FaLinkedin size={40} />
        </a>
      </div>
    </div>
  )
}
