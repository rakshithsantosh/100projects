import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connectionStatus = await mongoose.connect(process.env.MONGODB_URL);
    console.log(connectionStatus);
  } catch (error) {
    console.log("mongodb connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
