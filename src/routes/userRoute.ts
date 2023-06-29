import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/userControllers";

const router = express.Router();

router.route("/register").post(createUser);

router.route("/users").get(getAllUsers);

router.route("/users/:id").get(getUser).delete(deleteUser).patch(updateUser);

export default router;
