import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Genres() {

    return (
        <div style={{ textAlign: 'left', backgroundColor: '#f7f4f1', borderRadius: 10, padding: 30, marginLeft: 0, marginTop: 10 }}>
            <h3 style={{ fontSize: 18, marginBottom: 10 }}>Genres</h3>
            <Row style={{ padding: 2 }}>
                <Col>
                    <Link to='/books' style={{ fontSize: 13, color: '#362c24' }}>All books</Link>
                </Col>
                <Col>
                    <Link to='/books' style={{ fontSize: 13, color: '#362c24' }}>Art</Link>
                </Col>
                <Col>
                    <Link to='/Business' style={{ fontSize: 13, color: '#362c24' }}>Business</Link>
                </Col>
                <Col>
                    <Link to='/Classics' style={{ fontSize: 13, color: '#362c24' }}>Classics</Link>
                </Col>
            </Row>
            <Row style={{ padding: 2 }}>
                <Col>
                    <Link to='/Fantasy' style={{ fontSize: 13, color: '#362c24' }}>Fantasy</Link>
                </Col>
                <Col>
                    <Link to='/Fiction' style={{ fontSize: 13, color: '#362c24' }}>Fiction</Link>
                </Col>
                <Col>
                    <Link to='/Horror' style={{ fontSize: 13, color: '#362c24' }}>Horror</Link>
                </Col>
                <Col>
                    <Link to='/Manga' style={{ fontSize: 13, color: '#362c24' }}>Manga</Link>
                </Col>
            </Row>
            <Row style={{ padding: 2 }}>
                <Col>
                    <Link to='/Mystery' style={{ fontSize: 13, color: '#362c24' }}>Mystery</Link>
                </Col>
                <Col>
                    <Link to='/Poetry' style={{ fontSize: 13, color: '#362c24' }}>Poetry</Link>
                </Col>
                <Col>
                    <Link to='/Romance' style={{ fontSize: 13, color: '#362c24' }}>Romance</Link>
                </Col>
                <Col>
                    <Link to='/Science-Fiction' style={{ fontSize: 13, color: '#362c24' }}>Science-Fiction</Link>
                </Col>
            </Row>
        </div>
    )
}

export default Genres;