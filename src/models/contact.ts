import mongoose, { Schema } from "mongoose";

const ContactSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, require: true },
    description: { type: String },
    from:  { type: Schema.Types.ObjectId, ref: 'User', require: true },
    to: { type: Schema.Types.ObjectId, ref: 'User', require: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<any>("Contact", ContactSchema);
