import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Genres() {

    return (
        <div style={{ textAlign: 'left', backgroundColor: '#f7f4f1', borderRadius: 10, padding: 30, marginLeft: 0, border: 'solid 1px #f2efeb' }}>
            <h3 style={{ fontSize: 18, marginBottom: 10 }}>Genres</h3>
            <Row style={{ padding: 2 }}>
                <Col>
                    <Link to='/all_books/books' style={{ fontSize: 13, color: '#362c24' }}>All books</Link>
                </Col>
                <Col>
                    <Link to='/all_books/Art' style={{ fontSize: 13, color: '#362c24' }}>Art</Link>
                </Col>
                <Col>
                    <Link to='/all_books/Business' style={{ fontSize: 13, color: '#362c24' }}>Business</Link>
                </Col>
                <Col>
                    <Link to='/all_books/Classics' style={{ fontSize: 13, color: '#362c24' }}>Classics</Link>
                </Col>
            </Row>
            <Row style={{ padding: 2 }}>
                <Col>
                    <Link to='/all_books/Fantasy' style={{ fontSize: 13, color: '#362c24' }}>Fantasy</Link>
                </Col>
                <Col>
                    <Link to='/all_books/Fiction' style={{ fontSize: 13, color: '#362c24' }}>Fiction</Link>
                </Col>
                <Col>
                    <Link to='/all_books/Horror' style={{ fontSize: 13, color: '#362c24' }}>Horror</Link>
                </Col>
                <Col>
                    <Link to='/all_books/Manga' style={{ fontSize: 13, color: '#362c24' }}>Manga</Link>
                </Col>
            </Row>
            <Row style={{ padding: 2 }}>
                <Col>
                    <Link to='/all_books/Mystery' style={{ fontSize: 13, color: '#362c24' }}>Mystery</Link>
                </Col>
                <Col>
                    <Link to='/all_books/Poetry' style={{ fontSize: 13, color: '#362c24' }}>Poetry</Link>
                </Col>
                <Col>
                    <Link to='/all_books/Romance' style={{ fontSize: 13, color: '#362c24' }}>Romance</Link>
                </Col>
                <Col>
                    <Link to='/all_books/Science-Fiction' style={{ fontSize: 13, color: '#362c24' }}>Science-Fiction</Link>
                </Col>
            </Row>
        </div>
    )
}

export default Genres;