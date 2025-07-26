import express from "express";
import { deleteUser, test, updateUser } from "../controller/user.controller.js";
import { verifyTokken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.patch("/update/:id", verifyTokken, updateUser);
router.delete("/delete/:id", verifyTokken, deleteUser);

export default router;
