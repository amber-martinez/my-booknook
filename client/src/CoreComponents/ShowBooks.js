import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { Rate } from 'antd';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function ShowBooks({ allBooks }) {

    const [bookdata, setBookData] = useState([])
    const { genre } = useParams();
    console.log(genre)

    // fetch based off of genre

    useEffect(() => {
        fetch(`/api/${genre}`)
        .then(r => r.json())
        .then(data => setBookData(data))
    }, [])

    return (
        <div>
            {genre}
            {bookdata.map(book => (
                <div>
                    {book.title}
                </div>
            ))}
        </div>
    )
}

export default ShowBooks;