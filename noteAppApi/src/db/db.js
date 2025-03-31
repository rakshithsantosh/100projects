import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to DB");
  } catch (error) {
    console.log(`Error connecting to the DB ${error}`);
    process.exit(1);
  }
};

export default connectToDB;
