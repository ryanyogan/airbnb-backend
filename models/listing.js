import { Schema, model } from "mongoose";

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

export default model("Listing", listingSchema);
