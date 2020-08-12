import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'

export default function AddBook() {

    let [bookname, setBookname] = useState("")
    let [genre, setGenre] = useState("")
    let [authorId, setAuthorId] = useState(0)

    let {data} = useQuery(getAuthorsQuery)
    const [addBook] = useMutation(addBookMutation);
    
    const handleClick = (e) => {
        e.preventDefault();
        addBook({ 
            variables: { 
                name: bookname, 
                genre: genre,
                authorId: authorId
            },
            refetchQueries: [{
                query: getBooksQuery
            }] 
        })
    }

    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={e => setBookname(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={e => setGenre(e.target.value)} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={e => setAuthorId(e.target.value)}>
                    <option value="0">Select author</option>
                    {data && data.authors.map(author => (
                        <option key={author.id} value={author.id}> {author.name} </option>
                    ))}
                </select>
            </div>
            <button onClick={handleClick}>+</button>
        </form>
    )
}