import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import portfolio from './portfolioHelper'
import Modal from 'react-bootstrap/Modal'

function PortfolioCard() {
  const [show, setShow] = useState(false)
  const [showTwo, setShowTwo] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="portfilo-card ">
      <Row xs={1} md={2} lg={3} className="card-col g-4 p-4 ">
        {portfolio.map((item, idx) => (
          <Col>
            <Card className="card">
              <Card.Img class="card-image-top" variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Button variant="dark" onClick={handleShow}>
                  View
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{item.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{item.largeDesc}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default PortfolioCard
