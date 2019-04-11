require('dotenv').config();
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
// use cors
app.use(cors)

mongoose.connect(process.env.DB_CONNECTION)
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    // schema
    schema,
    graphiql: true
}))

app.listen(4000, () =>{
    console.log('Listening express on 4000...')
})