import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','captain'],
        default:'user'
    },
    isActive:{
        type:Boolean,
        default:true
    },
    refreshToken:String
},{timestamps:true});

export const userModel = mongoose.models.user || mongoose.model('user',userSchema);