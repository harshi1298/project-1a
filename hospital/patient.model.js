import mongoose from "mongoose";
const patientschema=mongoose.Schema(
    {
        name_:{
            type:String,
            require:true,
          },
          diagnosewith:{
            type:String,
            require:true,
          },
          age:{
            type:Number,
            require:true,
          },
          blood_group:{
            type:String,
            reqiure:true,
            enum:['A','B','AB','O'],
          },
          address:{
            type:String,
            require:true,
          },
          gender:{
            type:String,
            require:true,
            enum:['M','F','O'],
          },
          admittedin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"hospital",
          },
    },{timestamps:true})
export const patient=mongoose.model("patient",patientschema);