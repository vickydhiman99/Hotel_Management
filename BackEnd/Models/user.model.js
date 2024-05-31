const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// const userSchema = new mongoose.Schema
const userSchema = new Schema(
    {
        authType:{
            type:String,
            enum:["Admin", "Customer", "Chef", "Waiter"],
            default:"Customer"
        },
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            default:""
        },
        image:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            enum:["Male", "Female"],
            default:"Male"
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true,
    }
)
// const User = mongoose.model("User", userSchema);
const User = model("User", userSchema);
module.exports = User;