require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

const server = express();
server.use(morgan("combined"));
server.use(cors()); //allow cross-origin

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
