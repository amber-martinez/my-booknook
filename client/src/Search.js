import React, { useState } from 'react';

function Search({ allBooks }) {

    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])

    function onSearchInput(e) {
        setSearch(e.target.value)
        handleEnterClick(e)
    }

    function handleEnterClick(e) {
        e.preventDefault()

        setResults(allBooks.filter(book => {
            if (book.title.toLowerCase().includes(search.toLowerCase())) {
                return book.title
            }
        }))
    }

    return (
        <div style={{ margin: '50px 0px 0px 100px' }}>
            <h3 style={{ padding: 5, fontWeight: 600, backgroundColor: '#e9e5dc3a', textAlign: 'left', display: 'inline-block' }}>Search</h3>
            <div>
                <form onSubmit={handleEnterClick} style={{ marginBottom: 34 }}>
                    <input type='text' onChange={onSearchInput} id='searchBox' placeholder='Find books'></input>
                    <button type='submit' id='searchEnter'>Enter</button>
                </form>
            </div>
            <div>
                {results.map(result => (
                    <div style={{ marginBottom: 15 }}>
                        <div style={{ display: 'inline-block' }}>
                            <img src={result.image_url} style={{ height: 120, width: 80, objectFit: 'cover' }}></img>
                        </div>
                        <div style={{ display: 'inline-block', paddingLeft: 10, verticalAlign: 'top' }}>
                            <h6 style={{ fontWeight: 600, color: '#362c24' }} id='bookTitle'>{result.title}</h6>
                            <p style={{ fontSize: 15, fontWeight: 400 }}>by {result.author}</p>
                            <button id='actionButton' style={{ fontSize: 14 }}>Read Reviews</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search;