import express from "express";
import { verifyTokken } from "../utils/verifyUser.js";
import {
  createListing,
  deleteListing,
  updateListing,
} from "../controller/listing.controller.js";

const router = express.Router();

router.post("/create", verifyTokken, createListing);
router.delete("/delete/:id", verifyTokken, deleteListing);
router.put("/update/:id", verifyTokken, updateListing);

export default router;
