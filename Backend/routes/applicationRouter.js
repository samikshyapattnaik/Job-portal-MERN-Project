import express from 'express';
import {
  employerGetAllApplications,
    jobSeekerDeleteApplication,
    jobSeekerGetAllApplications,
    postApplication,
  } from "../controllers/applicationController.js";
import {isAuthorized} from '../middlewares/auth.js'


const router = express.Router();
router.get("/jobSeeker/getall",isAuthorized,jobSeekerGetAllApplications);
router.get("/employee/getall",isAuthorized,employerGetAllApplications);
router.delete("/jobdelete/:id",isAuthorized,jobSeekerDeleteApplication)
router.post("/post",isAuthorized,postApplication)


export default router