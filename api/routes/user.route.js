import express from "express";
import {
  deleteUser,
  test,
  updateUser,
  getUserListings,
} from "../controller/user.controller.js";
import { verifyTokken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.patch("/update/:id", verifyTokken, updateUser);
router.delete("/delete/:id", verifyTokken, deleteUser);
router.get("/listings/:id", verifyTokken, getUserListings);

export default router;
