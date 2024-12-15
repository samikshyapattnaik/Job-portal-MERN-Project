import { User } from "../models/userSchema.js"
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "./error.js"
import jwt from "jsonwebtoken";


// Middlewares
export const isAuthorized = catchAsyncError(async(req,res,next)=>{
    const { token } = req.cookies
    if(!token){
        return next(new ErrorHandler("Unauthorized",401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

    req.User= await User.findById(decoded.id);

    next();
})