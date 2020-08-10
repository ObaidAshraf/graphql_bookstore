import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { getBooksQuery } from '../queries/queries'

function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery)
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
                    <li key={book.id}> {book.name} </li>
                ) )}
            </ul>
        </div>
    )
}

export default BookList