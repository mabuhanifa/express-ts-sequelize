import * as dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

const sequelize = new Sequelize(String(process.env.DB_URI));

export default sequelize;
