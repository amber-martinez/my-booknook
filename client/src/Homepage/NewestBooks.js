import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function NewestBooks({ newestBooks }) {

    return (
        <div style={{ textAlign: 'left', backgroundColor: '#f7f4f1', borderRadius: 10, padding: 30, marginLeft: 0 }}>
            <h3 id='topPicksHeader' style={{ fontSize: 18 }}>Newly Added</h3>
            <p style={{ fontSize: 13, marginTop: 0 }}>These books are fresh on the shelf.</p>
            <div style={{ textAlign: 'left', marginTop: 28, paddingLeft: 0 }} id='bookCardGroup'>
                {newestBooks.length == 0 ?
                    <div style={{ textAlign: 'left', marginTop: 245 }}>
                        <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
                    </div>
                :
                newestBooks.map(book => (
                    <Card id='homepageBookListItem' class="card text-center" key={book.id} style={{ display: 'inline-block', border: 'none', margin: 10, marginLeft: 0, backgroundColor: 'transparent' }}>
                        <Card.Img src={book.image_url} id='homepageBookImg'/>
                        <Card.Body style={{ fontSize: 11, textAlign: 'center', marginTop: 10 }}>
                            <Card.Text>{book.title}</Card.Text>
                        </Card.Body>
                    </Card>
                    ))
                }
            </div>
            {/* <hr className="dotted" style={{ width: 200, marginTop: 50 }}></hr> */}
        </div>
    )
}

export default NewestBooks;