import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import portfolio from './portfolioHelper'

function PortfolioCard() {
  return (
    <div className="portfio-card">
      <Row xs={1} md={2} lg={3} className="g-4">
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        <Col>
          <Card className="card">
            <Card.Img class="card-image-top" variant="top" src={portfolio.id_1.image} />
            <Card.Body>
              <Card.Title>{portfolio.id_1.title}</Card.Title>
              <Card.Text>{portfolio.id_1.desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img class="card-image-top" variant="top" src={portfolio.id_2.image} />
            <Card.Body>
              <Card.Title>{portfolio.id_2.title}</Card.Title>
              <Card.Text>{portfolio.id_2.desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img class="card-image-top" variant="top" src={portfolio.id_3.image} />
            <Card.Body>
              <Card.Title>{portfolio.id_3.title}</Card.Title>
              <Card.Text>{portfolio.id_3.desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img class="card-image-top" variant="top" src={portfolio.id_4.image} />
            <Card.Body>
              <Card.Title>{portfolio.id_4.title}</Card.Title>
              <Card.Text>{portfolio.id_4.desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img class="card-image-top" variant="top" src={portfolio.id_4.image} />
            <Card.Body>
              <Card.Title>{portfolio.id_4.title}</Card.Title>
              <Card.Text>{portfolio.id_4.desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img class="card-image-top" variant="top" src={portfolio.id_4.image} />
            <Card.Body>
              <Card.Title>{portfolio.id_4.title}</Card.Title>
              <Card.Text>{portfolio.id_4.desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* ))} */}
      </Row>
    </div>
  )
}

export default PortfolioCard
