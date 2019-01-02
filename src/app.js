import express from "express";
import mongoose, { mongo } from "mongoose";
import graphqlHTTP from "express-graphql";
import schema from "../graphql";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql: true
  }))
);

mongoose.connect(
  "mongodb://mongo:27017/airbnb",
  { useNewUrlParser: true }
);

const server = app.listen(8080, () => {
  console.log(`> http://localhost:${server.address().port}`);
});
