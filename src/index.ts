import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import testDbConnection from "./config/db";
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

testDbConnection();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`App is running on port ${port}!`);
});
