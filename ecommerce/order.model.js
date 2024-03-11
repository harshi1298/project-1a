import mongoose from "mongoose";
const orderitemschema=new mongoose.Schema({
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
    },
    quantity:{
        type:Number,
        require:true,
        default:1,
    },
})
const orderschema=new mongoose.Schema(
    {
      orderprice:{
        type:Number,
        require:true,
      },
      customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
      },
      orderitems:{
        type:[orderitemschema]
      },
      adress:{
        type:String,
        require:true,
      },
      status:{
        type:String,
        enum:["pending","deleivered","cancelled"],
        default:"pending",
      },
    },{timestamps:true})
    export const order=mongoose.model("order",orderschema);