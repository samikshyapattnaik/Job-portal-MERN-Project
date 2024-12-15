import express from 'express';
import { deleteJob, getAllJobs ,getSingleJob,postJob,} from '../controllers/jobcontroller.js';
import {isAuthorized} from '../middlewares/auth.js'
import { getmyJobs } from '../controllers/jobcontroller.js';
import { updateJob } from '../controllers/jobcontroller.js';

const router = express.Router();

router.get('/getAll',getAllJobs)    
router.post('/post',isAuthorized,postJob)
router.get("/getmyjob",isAuthorized,getmyJobs)
router.put("/update/:id",isAuthorized,updateJob)
router.delete("/delete/:id",isAuthorized,deleteJob)
router.get("/:id",isAuthorized,getSingleJob)



export default router