import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function TopPicks({ newestBooks }) {

    return (
        <div id='topPicksContainer'>
            <h3 id='topPicksHeader'>Newly Added</h3>
            <p>These books are fresh on the shelf.</p>
            <CardGroup class="row row-cols-3 row-cols-md-5 g-2" id='bookCardGroup'>
                {newestBooks.length == 0 ?
                    <div style={{ textAlign: 'center', marginTop: 245 }}>
                        <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
                    </div>
                :
                newestBooks.map(book => (
                    <Card id='homepageBookListItem' class="card text-center" key={book.id}>
                        <Card.Img src={book.image_url} id='homepageBookImg'/>
                        <Card.Body id='bookCardBody'>
                        </Card.Body>
                    </Card>
                    ))
                }
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