const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema/index');
const PORT = 8000;
const app = express();

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

module.exports = app;
