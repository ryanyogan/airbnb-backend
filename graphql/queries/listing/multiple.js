import { GraphQLList, GraphQLID, GraphQLNonNull } from "graphql";
import { Types } from "mongoose";

import listingType from "../../types/listing";
import ListingModel from "../../../models/listing";

export default {
  type: new GraphQLList(listingType),
  args: {},
  resolve(_, args) {
    return ListingModel.find().exec();
  }
};
