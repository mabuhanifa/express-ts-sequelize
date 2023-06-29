import * as dotenv from "dotenv";
import { DataTypes, Sequelize } from "sequelize";
dotenv.config();

const sequelize = new Sequelize(String(process.env.DB_URI));

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    timestamps: true, // Enables timestamps (createdAt and updatedAt)
    updatedAt: "updatedTimestamp", // Custom name for the updatedAt field
    createdAt: "createdTimestamp", // Custom name for the createdAt field
  }
);

export default User;
