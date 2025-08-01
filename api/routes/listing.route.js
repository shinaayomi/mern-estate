import express from "express";
import { verifyTokken } from "../utils/verifyUser.js";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
} from "../controller/listing.controller.js";

const router = express.Router();

router.post("/create", verifyTokken, createListing);
router.delete("/delete/:id", verifyTokken, deleteListing);
router.put("/update/:id", verifyTokken, updateListing);
router.get("/get/:id", getListing);

export default router;
