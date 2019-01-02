import express from "express";
import mongoose, { mongo } from "mongoose";
import graphqlHTTP from "express-graphql";

const app = express();

mongoose.connect(
  "mongodb://mongo/graphql",
  { useNewUrlParser: true }
);

const server = app.listen(8080, () => {
  console.log(`> http://localhost:${server.address().port}`);
});
