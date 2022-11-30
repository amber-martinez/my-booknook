import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

function TopPicks({ allBooks }) {

    const books = allBooks.map(book => (
        <Card id='homepageBookListItem' class="card text-center">
            <Card.Img src={book.image_url} id='homepageBookImg'/>
            <Card.Body id='bookCardBody'>
            </Card.Body>
        </Card>
    ))

    return (
        <div id='topPicksContainer'>
            <h3 id='topPicksHeader'>Trending</h3>
            <p>These books are all the rage. Have you caught on yet?</p>
            <CardGroup class="row row-cols-3 row-cols-md-5 g-2" id='bookCardGroup'>
                {books}
                <Card id='homepageBookListItem' class="card text-center">
                <Card.Body id='bookCardBody'>
                    {/* <Card.Text id='homepageGenreBubbles'>{book.genre}</Card.Text> */}
                    {/* <Card.Title id='bookCardTitle'>{book.title}</Card.Title> */}
                    <Card.Text>Discover more books here</Card.Text>
                {/* <Button variant="primary">read reviews</Button> */}
                </Card.Body>
        </Card>
            </CardGroup>
        </div>
    )
}

export default TopPicks;