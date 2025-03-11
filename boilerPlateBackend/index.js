import express from "express";
import userRoute from "./routes/user.route.js";
import dotenv from "dotenv";
import { connectToDb } from "./db/db.js";

dotenv.config();
connectToDb();

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

//api route
app.use("/api/user", userRoute);
