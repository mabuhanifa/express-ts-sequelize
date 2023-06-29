import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import testDbConnection from "./config/db";
import userRouter from "./routes/userRoute";
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

testDbConnection();

app.use(cors());
app.use(express.json());

//api routes

app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`App is running on port ${port}!`);
});
