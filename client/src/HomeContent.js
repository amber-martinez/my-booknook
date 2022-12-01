import React from 'react';
import TopPicks from './TopPicks'
import GenreBubbles from './GenreBubbles'
import RecentReviews from './RecentReviews';
import Welcome from './Welcome'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomeContent({ allBooks, setUser, reviewsSortByNew }) {

    return (
        <Container>
            <Row>
                <Col xs lg="5"><TopPicks allBooks={allBooks}/></Col>
                <Col><Welcome setUser={setUser}/></Col>
            </Row>
            <Row>
                <Col><RecentReviews reviewsSortByNew={reviewsSortByNew}/></Col>
                <Col><GenreBubbles allBooks={allBooks}/></Col>
            </Row>
        </Container>
    )
}

export default HomeContent;