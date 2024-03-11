import mongoose from "mongoose";
const categorySchema=new mongoose.Schema({
   name:{
    type:String,
    require:true,
   },
   created_by:{
    type:mongoose.Schema.Type.ObjectId,
    ref:'user'//nane inside the mmodel
    },
},{timestamp:true});
export const category=mongoose.model("category",categoryschema);