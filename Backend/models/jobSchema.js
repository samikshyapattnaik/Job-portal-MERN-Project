import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true,"please provide job title"],
        minlength: [3,"job title must be at least 3 characters"],
        maxlength: [50,"job title must be at least 50 characters"]
    },
    description:{
        type: String,
        required: [true,"please provide job description"],
        minlength: [10,"job description must be at least 10 characters"],
        maxlength: [500,"job description must be at least 500 characters"]
    },
    category:{
        type: String,
        required: [true,"please provide job category"],
    },
    country:{
        type: String,
        required: [true,"please provide job country"],
    },
    city:{
        type: String,
        required: [true,"please provide job city"],
    },
    location:{
        type: String,
        required: [true,"please provide exact location"],
        minlength:[10,"job must be at least 50 characters"]
    },
    fixedSalary:{
        type: Number,
        minlength:[4,"salary must be at least 4 digits"],
        maxlength:[9,"salary must be at least 9 digits"]
    },
    salaryFrom:{
        type: Number,
        minlength:[4,"salary must be at least 4 digits"],
        maxlength:[9,"salary must be at least 9 digits"]
    },
    salaryTo:{
        type: Number,
        minlength:[4,"salary must be at least 4 digits"],
        maxlength:[9,"salary must be at least 9 digits"]
    },
    expired:{
        type: Boolean,
        default: false,

    },
    jobPostedOn:{
        type:Date,
        default:Date.now,

    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    }
})

export const Job =  mongoose.model("job",jobSchema)