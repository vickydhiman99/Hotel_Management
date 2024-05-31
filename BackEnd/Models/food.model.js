const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// const userSchema = new mongoose.Schema
const foodSchema = new Schema(
    {
        foodType:{
            type:String,
            enum:["Veg", "NonVeg", "Drink"],
            default:"Veg"
        },
        foodName:{
            type:String,
            default:""
        },
        foodPrice:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true,
    }
)
// const User = mongoose.model("User", userSchema);
const Food = model("Food", foodSchema);
module.exports = Food;