import mongoose from "mongoose";
const productschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    rating:{
      type:Number,
      default:0,
    },
    productimage:{
       //momgo data base can store image in buffer form but it is not good practice and kept on own sever with the help of url or with the useof third party services
      type:String,  
    },
    stock:{
        type:Number,
        default:0,
    },
    Category:{
      type:mongoose.Schema.Types.ObjectId,
      require:true,
      ref:"category",
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
},{timestrap:true})
export const product=mongoose.model("product",productschema);