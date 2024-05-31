const Order = require("../Models/order.model");

const createOrderOffline = async (req, res) => {
    try {
        const { orderNumber, orderDate, orderBy, plateQty, foodAmount, customerMobile, tableNumber, foodOrder} = req.body;

        if (!orderNumber || !foodAmount || !customerMobile || !orderBy || !plateQty || !tableNumber || !foodOrder) {
            return res.status(400).json({
                status: 400,
                error: "All fields (orderNumber, customerMobile, tableDate, amount, tableNumber, food) are required.",
            })
        }

        const newOrder = new Order({
            orderNumber, 
            orderDate, 
            orderBy,
            plateQty,
            foodAmount,
            customerMobile, 
            tableNumber,
            foodOrder,
        })

        // save the user to the database
        const saveOrder = await newOrder.save();
        if (!saveOrder) {
            return res.status(400).json({
                status: 400,
                error: "Order is Not created.",
            })
        }

        // return the response
        res.status(200).json({
            status: 201,
            message: "Order created successfully",
            data: saveOrder,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating Order:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const createOrder = async (req, res) => {
    try {
        const { orderNumber, orderDate, plateQty, foodAmount, tableNumber, userOrder, foodOrder} = req.body;

        if (!orderNumber || !foodAmount || !plateQty || !tableNumber || !userOrder || !foodOrder) {
            return res.status(400).json({
                status: 400,
                error: "All fields (orderNumber, customerMobile, tableDate, amount, tableNumber, user, food) are required.",
            })
        }

        const newOrder = new Order({
            orderNumber, 
            orderDate, 
            plateQty,
            foodAmount,
            tableNumber, 
            userOrder, 
            foodOrder,
        })

        // save the user to the database
        const saveOrder = await newOrder.save();
        if (!saveOrder) {
            return res.status(400).json({
                status: 400,
                error: "Order is Not created.",
            })
        }

        // return the response
        res.status(200).json({
            status: 201,
            message: "Order created successfully",
            data: saveOrder,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating Order:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const getOrder = async (req, res) => {
    try {
        const getOrderdata = await Order.find().populate("tableNumber userOrder foodOrder");
        if (!getOrderdata) {
            return res.status(400).json({
                status: 400,
                error: "Order Data Get Not Found.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Order Data Get successfully",
            data: getOrderdata,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating Order:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}




const getOrderById = async (req, res) => {
    const { Id } = req.body;
    try {
        const getOrderbyid = await Order.findById(Id);
        if (!getOrderbyid) {
            return res.status(400).json({
                status: 400,
                error: "Order Data Get Not Found.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Order Data Get successfully",
            data: getOrderbyid,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating Order:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const updateOrder = async (req, res) => {
    try {
        const orderId = req.body.Id;
        const updateOrder = await Order.findByIdAndUpdate(orderId, req.body, {
            new: true,
        });
        if (!updateOrder) {
            return res.status(400).json({
                status: 400,
                error: "Order Not updated!.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Order Updated successfully",
            data: updateOrder,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating Order:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const deleteOrder = async (req, res) => {
    try {
        const orderId = req.body.Id;
        const orderDelete = await Order.findByIdAndDelete(orderId);
        if (!orderDelete) {
            return res.status(400).json({
                status: 400,
                error: "Order Not Deleted!.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Order Deleted successfully",
            data: orderDelete,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating Order:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}

module.exports = { createOrder, createOrderOffline, getOrder, getOrderById, updateOrder, deleteOrder };