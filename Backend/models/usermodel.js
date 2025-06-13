import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:"",
        required:true
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:true
    },
},{timestamps:true})

export const User = mongoose.model("user",userSchema)