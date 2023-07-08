const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema/index');

const app = express();

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(8000, () => {
  console.log('Server running in port 8000');
});

app.use(function (req, res) {
  res.status(404);
});

module.exports = app;
