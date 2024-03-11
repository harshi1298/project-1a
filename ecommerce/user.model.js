 import mongoose from "mongoose";
 const userschema=({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
 },{timestamp:true});
 export const user= mongoose.model("user",userschema);