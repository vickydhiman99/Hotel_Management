const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// const userSchema = new mongoose.Schema
const tableSchema = new Schema(
    {
        tableNumber:{
            type:Number,
            required:true
        },
        chairNumber:{
            type:Number,
            required:true
        },
    },
    {
        timestamps:true,
    }
)
// const User = mongoose.model("User", userSchema);
const Table = model("Table", tableSchema);
module.exports = Table;