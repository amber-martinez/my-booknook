import React, { useState } from 'react';
import AfterBookPost from './AfterBookPost';
import BeforeBookPost from './BeforeBookPost';

function AddBook() {

    const [post, setPost] = useState(false);

    return (
        <div style={{ textAlign: 'center' }}>
            {post ?
                <AfterBookPost/>
            : 
                <BeforeBookPost setPost={setPost}/>
            }
        </div>
    )
}

export default AddBook;