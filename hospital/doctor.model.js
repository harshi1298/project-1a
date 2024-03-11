import mongoose from "mongoose";
const doctorschema=mongoose.Schema(
    {
      

    },{timestamps:true})
export const doctor=mongoose.model("doctor",doctorschema);