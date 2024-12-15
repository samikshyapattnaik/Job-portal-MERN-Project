import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    phone: {
        type: Number,
        required: [true, "Please provide a Number"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 8,
        select: false
    },
    role: {
        type: String,
        required: [true, "Please provide your role"],
        enum:["Job Seeker","employee"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//hasing the password
//userschema check before save
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

//comparing the password
userSchema.methods.comparePassword = async function(enterpassword){
  return await bcrypt.compare(enterpassword, this.password)
}

//generate JWT token for authentication
userSchema.methods.generateJWT =  function(){
    return jwt.sign({id: this._id},process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRE
    })
}

export const User =mongoose.model("User",userSchema);