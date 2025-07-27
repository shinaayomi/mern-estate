import express from "express";
import { verifyTokken } from "../utils/verifyUser.js";
import { createListing } from "../controller/listing.controller.js";

const router = express.Router();

router.post("/create", verifyTokken, createListing);

export default router;
