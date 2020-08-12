import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { getBooksQuery, getBookQuery, deleteBookMutation } from '../queries/queries'


function getBookDetails(data, deleteBook) {

    if (data) {
        let { book } = data;
        return (
            <div>
                <h3> { book.name } </h3>
                <p> <b> Genre: </b> { book.genre } </p>
                <p> <b> Author: </b> {book.author.name } </p>
                <p> All books by this author </p>
                <ul>
                    {book.author.books.map(book => (
                        <li key={book.id}> { book.name } </li>
                    ))}                                 
                </ul>
                <button id="delete-book" onClick={() => {
                    deleteBook({
                        variables: {
                            id: book.id
                        },
                        refetchQueries: [{
                            query: getBooksQuery
                        }]
                    })
                }}>
                    Delete Book
                </button>
            </div>
        )
    } else {
        return <div>No book selected</div>
    }
}

export default function BookDetails({ id }) {
    let { data } = useQuery(getBookQuery, {
        variables: {
            id: id,
        }
    })

    let [deleteBook] = useMutation(deleteBookMutation);

    return (
        <div id="book-details">
            { getBookDetails(data, deleteBook) }
        </div>
    )
}