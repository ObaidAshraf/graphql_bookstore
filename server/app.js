const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// Allow cross-origin requests
app.use(cors())

mongoose.connect('mongodb://admin:admin123@ds129939.mlab.com:29939/gql-library')
mongoose.connection.once('open', () => {
    console.log("Connected to database.")
})


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("Now listening for requests on port 4000")
})