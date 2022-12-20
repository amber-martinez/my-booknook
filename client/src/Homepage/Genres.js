import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Genres() {

    return (
        <div>
            <h3 style={{ fontSize: 18, marginBottom: 25 }}>Genres</h3>
            <Row style={{ padding: 2 }}>
                <Col>
                    <Link to='/books' style={{ fontSize: 13, color: '#362c24' }}>All books</Link>
                </Col>
                <Col>
                    <Link to='Classics' style={{ fontSize: 13, color: '#362c24' }}>Classics</Link>
                </Col>
                <Col>
                    <Link to='/Fantasy' style={{ fontSize: 13, color: '#362c24' }}>Fantasy</Link>
                </Col>
                <Col>
                    <Link to='/Fiction' style={{ fontSize: 13, color: '#362c24' }}>Fiction</Link>
                </Col>
            </Row>
            <Row style={{ padding: 2 }}>
                <Col>
                    <Link to='/books' style={{ fontSize: 13, color: '#362c24' }}>Poetry</Link>
                </Col>
                <Col>
                    <Link to='Romance' style={{ fontSize: 13, color: '#362c24' }}>Romance</Link>
                </Col>
                <Col>
                    <Link to='/Science-Fiction' style={{ fontSize: 13, color: '#362c24' }}>Science-Fiction</Link>
                </Col>
                <Col>
                    <Link to='/Fiction' style={{ fontSize: 13, color: '#362c24' }}>Fiction</Link>
                </Col>
            </Row>
        </div>
    )
}

export default Genres;