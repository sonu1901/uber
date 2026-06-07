import mongoose, { Schema } from "mongoose";
const vehicleSchema = new Schema({
    vehicleOwner:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true, 
    },
    drivingLicense:{
        type:String,
        required:true,
    },
    vehicleType:{
        type:String,
        required:true
    },
    vehicleNumber:{
        type:String,
        required:true,
    },
    vehicleRc:{
        type:String,
        required:true,
    },
    vehicleValidity:Date,
},{timestamps:true});
export const vehicleModel = mongoose.models.vehicleInfo || mongoose.model('vehicleInfo',vehicleSchema);