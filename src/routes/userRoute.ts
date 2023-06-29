import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
} from "../controllers/userControllers";

const router = express.Router();

router.route("/register").post(createUser);

router.route("/users").get(getAllUsers);

router.route("/users/:id").get(getUser).delete(deleteUser);

export default router;
