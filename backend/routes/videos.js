import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  addVideo,
  addView,
  deleteVideo,
  getByTag,
  getVideo,
  randomVideo,
  search,
  subVideo,
  trendVideo,
  updateVideo,
} from "../controllers/video.js";

const router = express.Router();

router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/trend", trendVideo);
router.get("/random", randomVideo);
router.get("/sub", verifyToken, subVideo);
router.get("/tags", getByTag);
router.get("/search", search);

export default router;
