import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
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
        required:true
    },
    gender:{
        type:String,
        enum:["male","femal"],
        required:true
    },
})