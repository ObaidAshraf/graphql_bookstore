import { gql } from '@apollo/client'

const getBooksQuery = gql`
    query {
        books {
            name
            id
        }
    }
`

const getAuthorsQuery = gql`
    query {
        authors {
            name
            id
        }
    }
`

const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
        addbook(name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }
`


export { getBooksQuery, getAuthorsQuery, addBookMutation };