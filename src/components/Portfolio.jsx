import React from 'react'
import PortfolioCard from './PortfolioCard'
import portfolio from './portfolioHelper'

export default function Portfolio() {
  console.log(portfolio)

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <h2 id="portfolio-title" className="portfolio-title">
        Portfolio
      </h2>

      <div className="portfolio-container">
        <PortfolioCard />
      </div>
      <div id="portfolio-bottom"></div>
    </div>
  )
}
