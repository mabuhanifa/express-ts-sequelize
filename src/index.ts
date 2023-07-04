import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import dbConnection from "./config/db";
import userRouter from "./routes/userRoute";
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

// database connection
dbConnection();

//api routes
app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`App is running on port ${port}!`);
});
