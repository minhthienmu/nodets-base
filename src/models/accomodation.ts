import mongoose, { Schema } from "mongoose";

const AccomodationSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, require: true },
    rating: { type: Number },
    price: { type: Number, require: true },
    category: { type: String, require: true },
    image: { type: String },
    description: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<any>("Accomodation", AccomodationSchema);
