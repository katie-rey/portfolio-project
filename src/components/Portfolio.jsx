import React from 'react'
import PortfolioCard from './PortfolioCard'
import portfolio from './portfolioHelper'

export default function Portfolio() {
  console.log(portfolio)

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-title">
        <h2>Portfolio</h2>
      </div>
      <div className="portfolio-container">
        <PortfolioCard />
      </div>
    </div>
  )
}
