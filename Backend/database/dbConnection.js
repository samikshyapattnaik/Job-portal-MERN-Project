import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"MERN_STACK-JOB-SEEKING",
    })
    .then(()=>{
        console.log("MongoDB Connected Successfully");
    })
    .catch((error)=>{
        console.log(`MongoDB Connection Error: ${error}`);
    })
}