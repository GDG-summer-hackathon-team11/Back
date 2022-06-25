import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    category: {
      type: Array,
      required: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

export { UserSchema };
