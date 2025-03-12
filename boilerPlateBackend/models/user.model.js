import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: string,
      required: true,
      unique: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
    },
    password: {
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("User", userSchema);

export default user;
