import { GraphQLNonNull, GraphQLBoolean } from "graphql";

import ListingModel from "../../../models/listing";
import listingType from "../../types/listing";
import listingInputType from "../../types/listing-input";

export default {
  type: listingType,
  args: {
    data: {
      name: "data",
      type: new GraphQLNonNull(listingInputType)
    }
  },
  resolve(_, { data }) {
    const listingModel = new ListingModel(data);
    const newListing = listingModel.save();

    if (!newListing) {
      throw new Error("Error adding new listing");
    }

    return newListing;
  }
};
