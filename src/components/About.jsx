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
    <div className="about-wrapper">
      <div className="about-container">
        <div className="about-parent">
          <div className="about-details">
            <h2>About Me</h2>
            <p className="primary-text">
              {''}I am a recent graduate of the Enspiral Dev Academy, an intense and immersive 15
              week bootcamp, designed to produce awesome full stack developers.{' '}
            </p>
            <p className="primary-text">
              Human skills development and persoanl growth played a large part in my EDA journey,
              where I developed my intepersonal or soft skills. Active listening, NVC (non violent
              communications) and XXX are some of the valuable skills I have learnt .....{' '}
            </p>

            {/* <div class="arrow-up"></div> */}
          </div>
        </div>
      </div>
      <div className="about-skills">
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Tech Skills
        </Typography>

        <List dense={dense}>
          <ListItem>
            <ListItemIcon>
              <Javascript />
            </ListItemIcon>
            <ListItemText primary="Javascript" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Javascript />
            </ListItemIcon>
            <ListItemText primary="React/Redux" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Javascript />
            </ListItemIcon>
            <ListItemText primary="SQLite with Knex" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Javascript />
            </ListItemIcon>
            <ListItemText primary="HTML/CSS" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Javascript />
            </ListItemIcon>
            <ListItemText primary="Next.js" />
          </ListItem>
        </List>
      </div>
    </div>
  )
}
