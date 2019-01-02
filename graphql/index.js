import { GraphQLObjectType, GraphQLSchema } from "graphql";

import mutations from "./mutations";
import queries from "./queries";

export default new GraphQLSchema({
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: mutations
  }),
  query: new GraphQLObjectType({
    name: "Query",
    fields: queries
  })
});
