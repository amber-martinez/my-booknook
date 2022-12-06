import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function TopPicks({ allBooks }) {

    const books = allBooks.map(book => (
        <Card id='homepageBookListItem' class="card text-center" key={book.id}>
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
                    <Card.Text><Link to='/books' id='inlineLinkButton'>Discover more books here</Link></Card.Text>
                </Card.Body>
        </Card>
            </CardGroup>
        </div>
    )
}

export default TopPicks;