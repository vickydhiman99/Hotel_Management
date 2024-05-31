const { createFood, getFood, getFoodById, updateFood, deleteFood } = require ("../Controllers/food.controller");

module.exports = app => {
    app.post("/api/createFood", createFood);
    app.get("/api/getFood", getFood);
    app.post("/api/getFoodById", getFoodById);
    app.put("/api/updateFood", updateFood);
    app.delete("/api/deleteFood", deleteFood);
}