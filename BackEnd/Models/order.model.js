const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// const userSchema = new mongoose.Schema
const orderSchema = new Schema(
    {
        orderNumber: {
            type: Number,
            required: true
        },
        orderDate: {
            type: Date,
            default: new Date(),
        },
        plateQty: {
            type: Number,
            required: true,
        },
        foodAmount: {
            type: Number,
            required: true,
        },
        customerMobile:{
            type:Number,
            required:true
        },
        tableNumber: {
            type: Schema.Types.ObjectId,
            ref: "Table"
        },
        userOrder: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        orderBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        foodOrder: [{
            type: Schema.Types.ObjectId,
            ref: "Food"
        }]
    },
    {
        timestamps: true,
    }
)
// const User = mongoose.model("User", userSchema);
const Order = model("Order", orderSchema);
module.exports = Order;