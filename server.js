const express = require("express");
const app = express()
const PORT = 1066
//need database below
const userData = require("./MOCK_DATA.json");
const graphql = require("graphql");
const { graphqHTTP } = require("express-graphql");
const schema = require ("/Schemas/index");


app.use('/graphql', graphqlHTTP({
    schema,
    graphql: true

}))

app.listen(PORT, () => {
    console.log("Server running")

});

