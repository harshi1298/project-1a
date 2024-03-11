import mongoose from "mongoose";
const recordschema=mongoose.Schema(
    {
        // patient_name:{
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:"patient",
        // },
        
    },{timestamps:true});
export const record=mongoose.model("record",recordschema);