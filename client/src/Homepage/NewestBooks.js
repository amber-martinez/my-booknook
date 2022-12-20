import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function NewestBooks({ newestBooks }) {

    return (
        <div style={{ textAlign: 'center' }}>
            <h3 id='topPicksHeader' style={{ fontSize: 18 }}>Newly Added</h3>
            <p style={{ fontSize: 13, marginTop: 0 }}>These books are fresh on the shelf.</p>
            <div style={{ textAlign: 'center', marginTop: 30 }} id='bookCardGroup'>
                {newestBooks.length == 0 ?
                    <div style={{ textAlign: 'center', marginTop: 245 }}>
                        <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
                    </div>
                :
                newestBooks.map(book => (
                    <Card id='homepageBookListItem' class="card text-center" key={book.id} style={{ display: 'inline-block', border: 'none', margin: 10 }}>
                        <Card.Img src={book.image_url} id='homepageBookImg'/>
                        <Card.Body style={{ fontSize: 11, textAlign: 'center', marginTop: 10 }}>
                            <Card.Text>{book.title}</Card.Text>
                        </Card.Body>
                    </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default NewestBooks;