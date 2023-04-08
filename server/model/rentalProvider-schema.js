import mongoose from "mongoose";
const rentalProviderSchema= new mongoose.Schema({
    profilePic:{
        type:String
    },
    aadharNum:{
        type:String
    },
    address:{
        type:String
    },
    country:{
        type:String,
        default:"India"
    },
    pin:{
        type:String
    },
    price:{
        type:String
    },
    category:{
        type:String
    }
})
const rentalProvider=mongoose.model("rental-provider",rentalProviderSchema);
export default rentalProvider;

