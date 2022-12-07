import React from 'react';


function GenreBubbles({ allBooks }) {

    const bookGenres = allBooks.reduce((acc, cur) => {
        acc[cur.genre] = (acc[cur.genre] || 0) + 1
        return acc;
     }, {})

    const genreCountArr = []
    for (const [key, value] of Object.entries(bookGenres)) {
        genreCountArr.push({key, value})
    }

    const genreBubbles = genreCountArr.map(genre => (
        <div id='bubbleContainer' key={genre.key}>
            <div id='genreBubble' style={{borderRadius: 200, width: genre.value * 60, height: genre.value * 60}}>
                <p id="genreBubbleText" style={{ fontSize: genre.value * 6 }}>{genre.key}
                <br></br>
                {genre.value}</p>
            </div>
        </div>
    ))


    return (
        <div>
            <h3 id='popGenresHeader'>Popular Genres</h3>
            <p>The genres that get people going. Venture into one outside your bubble.</p>
            <div id='genreBubblesContainer'>
                {genreBubbles}
            </div>
        </div>
    )
}

export default GenreBubbles;