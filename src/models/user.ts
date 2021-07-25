import mongoose, { Schema } from "mongoose";

enum Role {
    Student = 1,
    Owner = 2
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: Role.Student || Role.Owner, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<any>("User", UserSchema);
