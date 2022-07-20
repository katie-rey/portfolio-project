import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <div id="contact" className="footer-container ">
      <div className="footer-links">
        <span>katierey@hotmail.com</span>
        <span>+64 21 743 855</span>
      </div>
      <div className="footer-logo"></div>
      <div className="footer-social">
        <FaGithub size={40} />
        <FaLinkedin size={40} />
      </div>
    </div>
  )
}
