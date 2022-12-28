import React, { useState } from 'react';
import BeforeBookPost from './BeforeBookPost';

function AddBook() {
    const [post, setPost] = useState(false);

    return (
        <div style={{ textAlign: 'center' }}>
            {post ?
                <div style={{ marginTop: 64 }}>
                    <img src='https://images.squarespace-cdn.com/content/v1/59c5803080bd5e5bb9c03e23/136d4d0a-d68e-4e5e-aee9-58769eadd670/BM_CHeckmark.png?format=1000w' style={{ textAlign: 'center', height: 70, marginBottom: 10 }}></img>
                    <br></br>
                    <h5 style={{ fontSize: 15 }}>This book has been added to the database!</h5>
                </div>
            : 
                <BeforeBookPost setPost={setPost}/>
            }
        </div>
    )
}

export default AddBook;