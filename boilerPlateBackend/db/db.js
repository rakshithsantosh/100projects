import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectToDb = () => {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
      console.log("connected to Db");
    })
    .catch((e) => {
      console.log(e);
    });
};
