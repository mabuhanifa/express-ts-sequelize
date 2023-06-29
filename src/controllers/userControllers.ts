import { Request, Response } from "express";
import User from "../models/User";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email } = req.body;

    // Create a new user in the database

    const user = await User.create({
      username: username,
      email: email,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.json({ message: "Failed to create user", error: error });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();

    res.status(200).json({ data: users, success: true });
  } catch (error) {
    res.json({ message: "Failed to get users", error: error });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id: id,
      },
    });

    res.status(200).json({ data: user, success: true });
  } catch (error) {
    res.json({ message: "Failed to get user", error: error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await User.destroy({
      where: {
        id: id,
      },
    });

    res
      .status(200)
      .json({ message: "User deleted successfully", success: true });
  } catch (error) {
    res.json({ message: "Failed to delete user", error: error });
  }
};
