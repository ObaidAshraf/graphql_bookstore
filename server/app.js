const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
// const dotenv = require('dotenv').config()
const dotenv = require('dotenv').config()
const MONGODB_URI=process.env.REACT_APP_MONGOLAB_URI

// Allow cross-origin requests
app.use(cors())

mongoose.connect(MONGODB_URI)
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