import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Rate } from 'antd';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

function Search({ allBooks }) {
    const [search, setSearch] = useState([]);
    const [books, setBooks] = useState([]);
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    entry.target.classList.add('show')
                } else {
                    entry.target.classList.remove('show')
                }
            });
        })
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el))
    }, [allBooks])

    function onSearchSubmit(e) {
        e.preventDefault();
        setSubmit(true)
        setBooks(allBooks.filter(book => {
        if (search === '') {
            return null
        } else if (book.title.replace(/\s+/g, '').toLowerCase().includes(search.toLowerCase())) {
            return book
        } else {
            return null
        }
        }))
    }

    return (
        <div style={{ fontSize: 13, textAlign: 'left', justifyContent: 'center', marginBottom: 20 }} class='hidden' id='softSlideIn'>
            <Col style={{ marginLeft: 300, marginRight: 300 }}>
                <h3 style={{ padding: 5, fontWeight: 600, backgroundColor: '#f7f4f1', borderRadius: 4, display: 'inline-block', fontSize: 18 }}>Search</h3>
                <form style={{ marginBottom: 34 }} onSubmit={onSearchSubmit}>
                    <input type='text' onChange={((e) => setSearch(e.target.value))} style={{ background: 'none', border: 'none', borderBottom: 'solid .95px #6f5b4b', width: 400, padding: 5, color: '#362c24', marginTop: 10 }} placeholder='Find books'></input>
                    <button type='submit' style={{ backgroundColor: 'transparent', border: 'none' }}><img src='https://i.imgur.com/a6uyYoG.png' style={{ height: 12 }}></img></button>
                </form>
            </Col>
            <Col style={{ marginTop: 55, textAlign: 'left', marginLeft: 300, marginRight: 300 }}>
                {submit ?
                books.length ?
                books.map(book => (
                    <Link style={{ color: '#362c24' }} to={`/books/${book.id}`}>
                        <Card class="card text-center" key={book.id} style={{ display: 'inline-block', border: 'none', backgroundColor: 'transparent', maxWidth: 90, wordBreak: 'break-word', textAlign: 'center', verticalAlign: 'top', maxHeight: 161, margin: '13px 55px 100px 0px' }}>
                            <Card.Img src={book.image_url} style={{ height: 140, width: 90, objectFit: 'cover' }} />
                            <Card.Body style={{ fontSize: 11, textAlign: 'center', marginTop: 10 }}>
                                {book.average_rating === null ?
                                <p style={{ marginBottom: 5 }}>No reviews yet</p>
                                :
                                <Rate disabled allowHalf defaultValue={book.average_rating} style={{ fontSize: 10 }} />
                                }
                                <Card.Text style={{ marginTop: 5, fontWeight: 600 }}>{book.title}</Card.Text>
                                <Card.Text style={{ marginTop: -15, fontSize: 10 }}>by {book.author}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                ))
                :
                <p>No results</p>
                : null
                }
            </Col>
        </div>
    )
}

export default Search;