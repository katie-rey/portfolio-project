import React from 'react'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import portfolio from './portfolioHelper'

function PortfolioCardItem() {
  return (
    <div className="card-item-wrapper">


<div className="portfilo-card-item ">
      {/* <Row xs={1} md={2} lg={3} className="card-col g-4 p-4 "> */}
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        <Col>
          <Card className="card">
            <Card.Img class="card-image-top" variant="top" src={portfolio.id_1.image} />
            <Card.Body>
              <Card.Title>{portfolio.id_1.title}</Card.Title>
              <Card.Text>{portfolio.id_1.desc}</Card.Text>
              <Button variant="dark">Github</Button>
              <Button variant="dark">Live site</Button>
              <a className="nav-link active" aria-current="page" href="/portfolio/1">
                Home
              </a>
            </Card.Body>
          </Card>
        </Col>
        {/* </Row> */}
    </div>
    </div>
  )
}

export default PortfolioCardItem