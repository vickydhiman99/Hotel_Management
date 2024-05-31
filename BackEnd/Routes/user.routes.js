const { createUser, getUser, getUserById, updateUser, deleteUser } = require("../Controllers/user.controller");

const { authToken } = require("../Middleware/Middleware.js");

module.exports = app => {
    app.post("/api/createUser", createUser);
    app.get("/api/getUser", getUser);
    app.post("/api/getUser",authToken,  getUser);
    app.post("/api/getUserById", getUserById);
    app.put("/api/updateUser", updateUser);
    app.delete("/api/deleteUser", deleteUser);
}