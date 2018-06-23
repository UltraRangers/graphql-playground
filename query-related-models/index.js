const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./app/schema');

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    pretty: true,
    schema
}));

app.listen(PORT, () => console.log(`Listening in PORT http://localhost:${PORT}`));