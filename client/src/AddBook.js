import React, { useState } from 'react';

function AddBook() {

    const [post, setPost] = useState(false);
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [coverImg, setCoverImg] = useState('');

    function onTitleChange(e) {
        setTitle(e.target.value)
    }

    function onAuthorChange(e) {
        setAuthor(e.target.value)
    }

    function onGenreChange(e) {
        setGenre(e.target.value)
    }

    function onCoverImgChange(e) {
        setCoverImg(e.target.value)
    }

    function onBookSubmit() {
        
        fetch('/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                author,
                image_url: coverImg,
                genre
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json().then(setPost(true))
            } else {
                r.json().then(e => setErrors(e.errors))
            }
        })
    }

    return (
        <div style={{ textAlign: 'center' }}>
            {post ?
            <div style={{ marginTop: 64 }}>
                <img src='https://images.squarespace-cdn.com/content/v1/59c5803080bd5e5bb9c03e23/136d4d0a-d68e-4e5e-aee9-58769eadd670/BM_CHeckmark.png?format=1000w' style={{ textAlign: 'center', height: 100, marginBottom: 10 }}></img>
                <br></br>
                <h5 id='editProfileHeader'>This book has been added to the database!</h5>
            </div>
            : 
            <div>
                <div style={{ marginTop: 64, marginBottom: 45 }}>
                    <h4 id='editProfileHeader' style={{ marginBottom: 10 }}>New Book</h4>
                    <p>Add a non-existing book to the database</p>
                </div>
                <div style={{ display: 'inline-block', verticalAlign: 'top', marginRight: 30 }}>
                    <p style={{ textAlign: 'left', marginBottom: 40 }}>Title</p>
                    <p style={{ textAlign: 'left', marginBottom: 40 }}>Author</p>
                    <p style={{ textAlign: 'left', marginBottom: 40 }}>Genre</p>
                    <p style={{ textAlign: 'left', marginBottom: 40 }}>Cover Image</p>
                </div>
                <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
                    <div style={{ display: 'inline-block', textAlign: 'left' }}>
                        <input type='text' id='signUpInputs' style={{ marginBottom: 35 }} onChange={onTitleChange}></input>
                        <br></br>
                        <input type='text' id='signUpInputs' style={{ marginBottom: 35 }} onChange={onAuthorChange}></input>
                        <br></br>
                        <select style={{ marginBottom: 35 }} onChange={onGenreChange}>
                            <option>Classics</option>
                            <option>Fantasy</option>
                            <option>Fiction</option>
                            <option>Poetry</option>
                            <option>Romance</option>
                            <option>Science-Fiction</option>
                        </select>
                        {/* <input type='text' id='signUpInputs' style={{ marginBottom: 35 }}></input> */}
                        <br></br>
                        <input type='text' id='signUpInputs' style={{ marginBottom: 35 }} onChange={onCoverImgChange}></input>
                    </div>
                    <br></br>
                </div>
                <div>
                    <button id='actionButton' style={{ marginTop: 70 }} onClick={onBookSubmit}>Save</button>
                    <br></br>
                    <div style={{ marginTop: 35 }}>
                        {errors.map(e => <p>{e}</p>)}
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default AddBook;