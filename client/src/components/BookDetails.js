import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { getBookQuery } from '../queries/queries'


function getBookDetails(data) {
    if (data) {
        let { book } = data;
        return (
            <div>
                <h3> { book.name } </h3>
                <p> { book.genre } </p>
                <p> {book.author.name } </p>
                <p> All books by this author </p>
                <ul>
                    {book.author.books.map(book => (
                        <li key={book.id}> { book.name } </li>
                    ))}                                 
                </ul>                                 
            </div>
        )
    } else {
        return <div>No book selected</div>
    }
}

export default function BookDetails({ id }) {
    // let bookDetails;
    let {loading, error, data} = useQuery(getBookQuery, {
        variables: {
            id: id,
        }
    })

    useEffect( () => {
        console.log("Data updated")
        // bookDetails = getBookDetails(data);
        // console.log(bookDetails)
    }, [ data ])


    return (
        <div id="book-details">
            {/* { bookDetails } */}
            { getBookDetails(data) }
        </div>
    )
}