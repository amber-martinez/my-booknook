import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BeforeBookPost({ setPost }) {

    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState(null);
    const [coverImg, setCoverImg] = useState('https://st2.depositphotos.com/1561359/12101/v/950/depositphotos_121012076-stock-illustration-blank-photo-icon.jpg');

    function onBookSubmit() {
        fetch('/api/books', {
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
        <div>
            <div style={{ marginTop: 64, marginBottom: 40 }}>
                <h4 style={{ marginBottom: 10, fontSize: 18,   display: 'inline-block', backgroundColor:'#f7f4f1', padding: 5, borderRadius: 5 }}>New Book</h4>
                <p style={{ fontSize: 14 }}>Add a non-existing book to the database</p>
            </div>

            <div style={{ width: '30rem', display: 'inline-block' }}>
                <Row>
                    <Col>
                        <Row style={{ justifyContent: 'center', fontSize: 13, marginBottom: 12 }}>
                            <input type='text' placeholder='Title' style={{ backgroundColor: 'transparent', border: '.95px solid #362c24', padding: '5px 6px 5px 6px', borderRadius: 3, }}onChange={((e) => setTitle(e.target.value))}></input>
                        </Row>
                        <Row style={{ justifyContent: 'center', fontSize: 13, marginBottom: 12 }}>
                            <input type='text' placeholder='Author' style={{ backgroundColor: 'transparent', border: '.95px solid #362c24', padding: '5px 6px 5px 6px', borderRadius: 3 }}onChange={((e) => setAuthor(e.target.value))}></input>
                        </Row>
                        <Row style={{ justifyContent: 'center', fontSize: 13, marginBottom: 12 }}>
                            <select style={{ backgroundColor: 'transparent', border: '.95px solid #362c24', padding: '3px 6px 3px 2px', borderRadius: 3, fontSize: 13 }} onChange={((e) => setGenre(e.target.value))} value={genre}>
                                <option selected="true" disabled="disabled">Select genre</option>
                                <option>Art</option>
                                <option>Business</option>
                                <option>Classics</option>
                                <option>Fantasy</option>
                                <option>Fiction</option>
                                <option>Horror</option>
                                <option>Manga</option>
                                <option>Mystery</option>
                                <option>Poetry</option>
                                <option>Romance</option>
                                <option>Science-Fiction</option>
                            </select>
                        </Row>
                        <Row style={{ justifyContent: 'center', fontSize: 13, marginBottom: 12 }}>
                            <input type='text' placeholder='Book Cover Image URL' style={{ backgroundColor: 'transparent', border: '.95px solid #362c24', padding: '5px 6px 5px 6px', borderRadius: 3, marginBottom: 30 }} onChange={((e) => setCoverImg(e.target.value))}></input>
                            <br></br>
                        </Row>
                    </Col>

                    <Col>
                        <Row style={{ justifyContent: 'center', fontSize: 13, marginBottom: 12 }}>
                            <figure style={{ maxWidth: '8rem', wordBreak: 'break-word', textAlign: 'center' }}>
                                <img src={coverImg} style={{ height: 130, width: 90, objectFit: 'cover', overflow: 'hidden', borderRadius: 10 }}></img>
                                <figcaption style={{ marginTop: 8, fontSize: 11 }}><strong>{title}</strong></figcaption>
                                <figcaption style={{fontSize: 11, marginTop: 2 }}>{author}</figcaption>
                            </figure>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ display: 'inline-block', marginTop: 40 }}>
                    <button style={{ backgroundColor: '#f7f4f1', borderColor: 'transparent', borderRadius: 5, fontSize: 13, padding: '3px 8px 3px 8px' }} onClick={onBookSubmit}>Save</button>
                    <br></br>
                    <div style={{ marginTop: 35 }}>
                        {errors ? errors.map(e => <p>{e}</p>) : null}
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default BeforeBookPost;