const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// const userSchema = new mongoose.Schema
const admissionSchema = new Schema(
    {
        fatherName:{
            type:String,
            required:true
        },
        motherName:{
            type:String,
            default:""
        },
        gender:{
            type:String,
            enum:["Male", "Female", "Others"],
            default:"Male"
        },
        parentMobileNo:{
            type:Number,
            required:true
        },
        state:{
            type:String,
            required:true,
            default:""
        },
        country:{
            type:String,
            required:true,
            default:""
        },
    },
    {
        timestamps:true,
    }
)
// const User = mongoose.model("User", userSchema);
const Admission = model("Admission", admissionSchema);
module.exports = Admission;