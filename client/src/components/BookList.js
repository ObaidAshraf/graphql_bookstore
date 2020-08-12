import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { getBooksQuery } from '../queries/queries'

import BookDetails from './BookDetails'

function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery)
    let [bookId, setBookId] = useState("")

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <div>
            <ul id="book-list">
                {data && data.books.map(book => (
                    <li key={book.id} onClick={() => setBookId(book.id)}> 
                        <span>{book.name} </span>
                    </li>
                ) )}
            </ul>
            <BookDetails id={bookId}/>
        </div>
    )
}

export default BookList