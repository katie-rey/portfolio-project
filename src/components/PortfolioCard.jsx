import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import portfolio from './portfolioHelper'
import Modal from 'react-bootstrap/Modal'
import { TimeToLeaveSharp } from '@mui/icons-material'
import { Container } from 'react-bootstrap'

function PortfolioCard() {
  const [show, setShow] = useState(false)
  const [modalData, setModalData] = useState(null)

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
                <Button
                  variant="dark"
                  onClick={() => {
                    setShow(true)
                    setModalData(item)
                  }}
                >
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Modal animation={false} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalData?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={modalData?.image} alt="G1s" width="1080" className="img-fluid" />{' '}
            <Container>
              <Row>{modalData?.largeDesc} </Row>
              <Row>{modalData?.stack} </Row>
            </Container>
            {/* <div className="modal-stack">{modalData?.stack}</div> */}
          </Modal.Body>{' '}
          <Modal.Footer className="modal-footer">
            <Button variant="info" href={modalData?.gitUrl}>
              View code
            </Button>
            <Button variant="info" href={modalData?.liveSite}>
              Live site
            </Button>

            {/* <a href={modalData?.gitUrl} class="btn btn-info" role="button">
              Li
            </a>
            <a href={modalData?.gitUrl}>View Code </a>
            <a href={modalData?.liveSite}>Live site </a> */}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </div>
  )
}

export default PortfolioCard
