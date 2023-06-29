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
