import express from "express";
import {
  postUserController,
  getUserController,
} from "../controllers/usersController";
const router = express.Router();
router.get("/api/users", getUserController);
router.post("api. users", postUserController);

export default router;
