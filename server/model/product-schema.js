import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
     id:{
        type:String
     },
     name:{
        type:String
     },
     company:{
        type:String
     },
     price:{
        type:String
     },
     image:{
        type:String
     },
     description:{
        type:String
     },
     category:{
        type:String
     }
})

const  product=mongoose.model("product", productSchema);
export default product;




