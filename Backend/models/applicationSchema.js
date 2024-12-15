import mongoose from "mongoose";
import validator from "validator";

const applicationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"please provide your name"],
        minlength: [3,"name must be at least 3 characters"],
        maxlength: [30,"name must be at least 50 characters"]
    },
    email:{
        type: String,
        required: [true,"please provide your email"],
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    coverLetter:{
        type: String,
        required: [true,"please provide your cover letter"],
    },
    phone:{
        type: Number,
        required: [true,"please provide your phone number"]
    },
    address:{
        type: String,
        required: [true,"please provide your address"],
        minlength: [10,"address must be at least 10 characters"],
        maxlength: [100,"address must be at least 100 characters"]
    },
    resume:{
        public_id:{
            type: String,
            required: [true,"please provide your resume"]
        },
        url:{
            type: String,
            required: [true,"please provide your resume"]
        }
    },
    applicantID:{
      user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
       },
      role:{
        type: String,
        required: [true,"please provide your role"],
        enum:["Job Seeker"]
      }
    },
    employeeID:{
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
           },
          role:{
            type: String,
            required: [true,"please provide your role"],
            enum:["employee"]
          }
    }

})
 export const Application = mongoose.model("Application",applicationSchema)