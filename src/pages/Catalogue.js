import React from 'react'
import bookData from '../data/bookData.json'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Catalogue() {
  console.log(bookData)
  return (
    <Container>
      <Row>
        {bookData.map(book => {
          return (
            <Col key={book.isbn}>
              <Card>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                  <Card.Text>{book.description}</Card.Text>
                  <Card.Link as={Link} to={'/book/' + book.isbn}>Visit Book Page</Card.Link>
                  <Card.Link className='btn btn-primary'>Checkout</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
