import React from 'react';
import TopPicks from './TopPicks'
import GenreBubbles from './GenreBubbles'
import LatestReview from './LatestReviews';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomeContent({ allBooks, allReviews }) {

    return (
        <Container>
            <Row>
                <Col xs lg="5"><TopPicks allBooks={allBooks}/></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col><LatestReview allReviews={allReviews}/></Col>
                <Col><GenreBubbles allBooks={allBooks}/></Col>
            </Row>
        </Container>
    )
}

export default HomeContent;