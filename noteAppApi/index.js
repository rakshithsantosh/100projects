import express from "express";
import dotenv from "dotenv";
import connectToDB from "./src/db/db.js";

dotenv.config();
const app = express();

//connection to DB
connectToDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
