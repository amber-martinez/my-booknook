import React from 'react';
import { Link } from 'react-router-dom';

function MyBooks({ user, userBooks }) {

    return (
        <div style={{ display: 'inline-block', marginBottom: 30, overflow: 'scroll', marginTop: 80, fontSize: 13 }}>
            <h4 style={{ fontSize: 18, backgroundColor:'#f7f4f1', display: 'inline-block', padding: '4px 6px 4px 6px', borderRadius: 4 }}>My Books</h4>
                {userBooks.length ?
                user.books.map(book => {
                    if (user.books.length === 1) {
                        return (
                        <div style={{ textAlign: 'center' }}>
                            <div id='profileBook' class="card text-center" key={book.id} style={{ verticalAlign: 'top' }}>
                                <img src={book.image_url} id='profileBookImg'/>
                                <h5 id='profileBooksTitle' style={{ fontSize: 18 }}>{book.title}</h5>
                            </div>
                        </div>
                        )
                    } else {
                    return (
                    <div id='profileBook' class="card text-center" key={book.id} style={{ verticalAlign: 'top' }}>
                        <img src={book.image_url} id='profileBookImg'/>
                        <h5 id='profileBooksTitle'>{book.title}</h5>
                    </div>
                    )
                    }
                }
                )
                :
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: 13 }}>You don't have any books yet!<br></br>
                    <Link to='/new-review' id='inlineLinkButton'>Create a review</Link> to add books to your nook.</p>
                </div>
                }
        </div>
    )
}

export default MyBooks;