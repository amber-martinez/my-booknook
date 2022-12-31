import React from 'react';
import { Link } from 'react-router-dom';

function Books({ user }) {

    return (
        <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: 18, backgroundColor:'#f7f4f1', display: 'inline-block', padding: '4px 4px 4px 4px', borderRadius: 4, marginBottom: 22 }}>My Books</h4><br></br>
            {user.books.length > 0 ?
            user.books.map(book => (
                <Link style={{ color: '#362c24' }} to={`/books/${book.id}`}>
                    <div style={{ textAlign: 'center', display: 'inline-block', }}>
                        <div class="card text-center" key={book.id} style={{ verticalAlign: 'top', borderColor: 'transparent', display: 'inline-block', margin: '0px 10px 24px 10px', width: 190, backgroundColor: 'transparent' }}>
                            <img src={book.image_url} style={{ height: 135, width: 90, objectFit: 'cover', margin: 'auto', boxShadow: '0 1px 1px 0 #81665162', borderRadius: 5 }}/>
                            <h5 style={{ marginTop: 14, maxWidth: 190, color: '#362c24', fontSize: 13 }}>{book.title}</h5>
                        </div>
                    </div>
                </Link>
            ))
            :
            <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: 13 }}>You don't have any books yet!<br></br>
                <Link to='/new-review' id='inlineLinkButton'>Create a review</Link> to add books to your nook.</p>
            </div>
            }
        </div>
    )

}

export default Books;