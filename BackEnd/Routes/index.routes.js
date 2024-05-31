module.exports = app => {
    require("./food.routes")(app);
    require("./order.routes")(app);
    require("./table.routes")(app);
    require("./user.routes")(app);
    require("./auth.routes")(app);
}