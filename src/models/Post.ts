import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import User from "./User";

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
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

User.hasMany(Post, { as: "posts", foreignKey: "userId" });
Post.belongsTo(User, { as: "author", foreignKey: "userId" });

export default Post;
