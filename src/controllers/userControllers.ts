import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
  try {
    res.send(req.body);
  } catch (error) {}
};
