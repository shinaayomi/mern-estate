import express from "express";
import {
  deleteUser,
  test,
  updateUser,
  getUserListings,
  getUser,
} from "../controller/user.controller.js";
import { verifyTokken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.patch("/update/:id", verifyTokken, updateUser);
router.delete("/delete/:id", verifyTokken, deleteUser);
router.get("/listings/:id", verifyTokken, getUserListings);
router.get("/:id", verifyTokken, getUser);

export default router;
