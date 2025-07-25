import express from "express";
import { test, updateUser } from "../controller/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.patch("/update/:id", updateUser);

export default router;
