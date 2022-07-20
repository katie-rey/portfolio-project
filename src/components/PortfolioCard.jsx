import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import portfolio from './portfolioHelper'

function PortfolioCard() {
  return (
    <div className="portfilo-card ">
      <Row xs={1} md={2} lg={3} className="card-col g-4 p-4 ">
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        <Col>
          <Card className="card">
            <Card.Img class="card-image-top" variant="top" src={portfolio.id_1.image} />
            <Card.Body>
              <Card.Title>{portfolio.id_1.title}</Card.Title>
              <Card.Text>{portfolio.id_1.desc}</Card.Text>
              <Button variant="dark">View</Button>
              <a className="nav-link active" aria-current="page" href="/portfolio/1">
                Home
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img class="card-image-top" variant="top" src={portfolio.id_2.image} />
            <Card.Body>
              <Card.Title>{portfolio.id_2.title}</Card.Title>
              <Card.Text>{portfolio.id_2.desc}</Card.Text>
              <Button variant="dark">View</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img class="card-image-top" variant="top" src={portfolio.id_3.image} />
            <Card.Body>
              <Card.Title>{portfolio.id_3.title}</Card.Title>
              <Card.Text>{portfolio.id_3.desc}</Card.Text>
              <Button variant="dark">View</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img class="card-image-top" variant="top" src={portfolio.id_4.image} />
            <Card.Body>
              <Card.Title>{portfolio.id_4.title}</Card.Title>
              <Card.Text>{portfolio.id_4.desc}</Card.Text>
              <Button variant="dark">View</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img class="card-image-top" variant="top" src={portfolio.id_5.image} />
            <Card.Body>
              <Card.Title>{portfolio.id_5.title}</Card.Title>
              <Card.Text>{portfolio.id_5.desc}</Card.Text>
              <Button variant="dark">View</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img class="card-image-top" variant="top" src={portfolio.id_6.image} />
            <Card.Body>
              <Card.Title>{portfolio.id_6.title}</Card.Title>
              <Card.Text>{portfolio.id_6.desc}</Card.Text>
              <Button variant="dark">View</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* ))} */}
      </Row>
    </div>
  )
}

export default PortfolioCard
