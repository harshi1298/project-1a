import mongoose from "mongoose";
const hospitalchema=mongoose.Schema(
    {
      
    },{timestamps:true})
export const hospital=mongoose.model("hospital",hospitalchema);