import mongoose, { Schema } from "mongoose";

const EmployeeSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<any>("Employee", EmployeeSchema);
