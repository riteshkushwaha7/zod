import mongoose from "mongoose";
import type { InferSchemaType } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    content: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: () => new Date(), required: true },
  },
  { timestamps: false }
);

export type User = InferSchemaType<typeof userSchema>;
export interface IUser extends User, mongoose.Document {}

export const UserModel =
  mongoose.models.User ?? mongoose.model("User", userSchema);


