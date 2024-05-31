const { LogIn } = require("../Controllers/auth.controller.js");

module.exports = app => {
    app.post("/api/login", LogIn);
}