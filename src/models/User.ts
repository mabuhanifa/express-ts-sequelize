import * as dotenv from "dotenv";
import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
dotenv.config();

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
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
