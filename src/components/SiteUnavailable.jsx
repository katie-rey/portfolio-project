import React from 'react'
import Button from 'react-bootstrap/Button'

function SiteUnavailable() {
  return (
    <div className="site-container">
      <div className="site-primary-title">
        <p>
          <span>This live site is under development. </span>
          <span>Please come back soon.</span>
        </p>
      </div>
      <Button variant="info" href="/">
        Back
      </Button>
    </div>
  )
}

export default SiteUnavailable
