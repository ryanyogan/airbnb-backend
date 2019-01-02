import { GraphQLBoolean } from "graphql";

import ListingModel from "../../../models/listing";

export default {
  type: GraphQLBoolean,
  resolve() {
    return ListingModel.remove({}).exec();
  }
};
