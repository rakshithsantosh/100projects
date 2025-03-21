import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to DB");
  } catch (error) {
    console.log("mongodb connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
