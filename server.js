require("dotenv").config();
require("morgan")("combined");
require("helmet")();
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

const server = express();

server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true // endpoint /graphql gives extra tool
  })
);

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
