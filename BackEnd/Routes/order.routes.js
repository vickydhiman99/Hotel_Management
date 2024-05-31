const { createOrder, getOrder, getOrderById, updateOrder, deleteOrder, createOrderOffline} = require("../Controllers/order.controller");

const {authToken} = require("../Middleware/Middleware")

module.exports = app => {
    app.post("/api/createOrder", createOrder);
    app.post("/api/createOrderOffline", authToken, createOrderOffline);
    app.get("/api/getOrder", getOrder);
    app.post("/api/getOrderById", getOrderById);
    app.put("/api/updateOrder", updateOrder);
    app.delete("/api/deleteOrder", deleteOrder);
}