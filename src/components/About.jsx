import React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import JavascriptIcon from '@mui/icons-material/Javascript'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import Javascript from '@mui/icons-material/Javascript'

export default function About() {
  const [dense, setDense] = React.useState(false)
  const [secondary, setSecondary] = React.useState(false)

  return (
    <div id="about" className="about-wrapper">
      <div className="about-side"></div>
      <div className="about-container">
        <div className="about-parent">
          <div className="about-details">
            <h2 className="about">About Me</h2>
            <p className="primary-text">
              {''}I am a recent graduate of the Enspiral Dev Academy, an intense and immersive 15
              week bootcamp, designed to produce awesome full-stack developers.{' '}
            </p>
            <p className="primary-text">
              With a background in Design, I naturally gravitated towards front end
              development. I have skills developing web apps using React and Redux, and full-stack
              apps with node and Express.js.
            </p>
            <p>
              Human skills development and personal growth have played a large part in my dev
              journey. Active listening, giving growth feedback and the ability to receive constructive feedback are some of the valuable skills I have developed through Dev Academy. 
              I am now ready to bring these skills to my next challenge!{' '}
            </p>
          </div>
          <div className="about-details-stack">
            <span className="techstack-text">
              Javascript · React · Redux · webpack · node · npm · Express · SQLite3 · MongoDB ·
              Netlify  · 
            </span>
            {" "}
            <span className="primary-text">Github · HTML · CSS · Bootstrap · MUI · Bulma · Flowbite </span>
          </div>
        </div>
      </div>
      <div id="about-side" className="about-side"></div>
    </div>
  )
}
