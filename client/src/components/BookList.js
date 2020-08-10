import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { getBooksQuery } from '../queries/queries'

import BookDetails from './BookDetails'

function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery)
    let [bookId, setBookId] = useState("")
    // setBooks(data)

    // useEffect( () => {
    //     console.log("Here")
    //     console.log(data.books)
    //     setBooks(data)

    // }, [ data ])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <div>
            <ul id="book-list">
                {data && data.books.map(book => (
                    <li key={book.id} onClick={() => setBookId(book.id)}> {book.name} </li>
                ) )}
            </ul>
            <BookDetails id={bookId}/>
        </div>
    )
}

export default BookList