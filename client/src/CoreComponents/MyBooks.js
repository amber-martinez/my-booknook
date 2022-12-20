import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MyBooks({ user }) {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (user == null) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [user])


    return (
        <div>
            {loading ?
            <div style={{ textAlign: 'center', marginTop: 245 }}>
                <img src='https://i.imgur.com/yqanog9.gif' style={{ height: 100 }}></img> 
            </div>
            :
            user
            ?
            <div style={{ textAlign: 'center' }}>
                <div id='profileBooksContainer' style={{ display: 'inline-block' }}>
                    <h4 id='profileBooksHeader'>My Books</h4>
                    {/* <div style={{ textAlign: 'center' }}> */}
                        {user.books.length ?
                        user.books.map(book => {
                            if (user.books.length == 1) {
                                return (
                                <div style={{ textAlign: 'center' }}>
                                    <div id='profileBook' class="card text-center" key={book.id} style={{ verticalAlign: 'top' }}>
                                        <img src={book.image_url} id='profileBookImg'/>
                                        <h5 id='profileBooksTitle'>{book.title}</h5>
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
                            <h5>You don't have any books yet!</h5>
                            <p><Link to='/new-review' id='inlineLinkButton'>Create a review</Link> to add books to your nook.</p>
                        </div>
                        }
                    {/* </div> */}
                </div>
            </div>
            :
            <div style={{ textAlign: 'center', marginTop: 91 }}>
                <img src='https://i.gifer.com/origin/c9/c9be20ebec1e40b9e2ed8488253c44b0_w200.gif'></img>
                <h5 style={{ textAlign: 'center', marginTop: 15 }}>Oh no, you're not logged in!<br></br>Sign up or log in <Link to='/login' id='inlineLinkButton'>here.</Link></h5>
            </div>
            
            }
        </div>
    )

}

export default MyBooks;