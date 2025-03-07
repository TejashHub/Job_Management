import express from "express";
import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteAllJobs,
  deleteJobs,
} from "../controller/job.controller.js";

const router = express.Router();

router.route("/").get(getAllJobs).post(createJob).delete(deleteAllJobs);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJobs);

export default router;
