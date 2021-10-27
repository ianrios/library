import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import bookData from '../data/bookData.json'

export default function Book() {
    const { isbn } = useParams()
    const history = useHistory()

    const currentBook = bookData.find(book => book.isbn === isbn)

    const handleBack = () => {
        history.push('/catalogue')
    }

    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{currentBook?.title}</Card.Title>
                <Card.Subtitle>{currentBook?.author}</Card.Subtitle>
                <Card.Text>{currentBook?.description}</Card.Text>
                <Button onClick={handleBack} variant="secondary">Back</Button>
                <Button variant="primary">Checkout</Button>
            </Card.Body>
        </Card>

    )
}
