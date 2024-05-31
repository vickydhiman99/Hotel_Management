const { createTable, getTable, getTableById, updateTable, deleteTable } = require ("../Controllers/table.controller");

module.exports = app => {
    app.post("/api/createTable", createTable);
    app.get("/api/getTable", getTable);
    app.post("/api/getTableById", getTableById);
    app.put("/api/updateTable", updateTable);
    app.delete("/api/deleteTable", deleteTable);
}