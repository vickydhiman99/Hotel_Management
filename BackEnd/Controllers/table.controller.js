const Table = require("../Models/tables.module");

const createTable = async (req, res) => {
    try {
        const { tableNumber, chairNumber} = req.body;

        if (!tableNumber || !chairNumber) {
            return res.status(400).json({
                status: 400,
                error: "All fields (tableNumber, chairNumber) are required.",
            })
        }

        const newTable = new Table({
            tableNumber, 
            chairNumber
        })

        // save the user to the database
        const saveTable = await newTable.save();
        if (!saveTable) {
            return res.status(400).json({
                status: 400,
                error: "Table is Not created.",
            })
        }

        // return the response
        res.status(200).json({
            status: 201,
            message: "Table created successfully",
            data: saveTable,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating table:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const getTable = async (req, res) => {
    try {
        const getTabledata = await Table.find();
        if (!getTabledata) {
            return res.status(400).json({
                status: 400,
                error: "Table Data Get Not Found.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Table Data Get successfully",
            data: getTabledata,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating table:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const getTableById = async (req, res) => {
    const { Id } = req.body;
    try {
        const getTablebyid = await Table.findById(Id);
        if (!getTablebyid) {
            return res.status(400).json({
                status: 400,
                error: "Table Data Get Not Found.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Table Data Get successfully",
            data: getTablebyid,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating table:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const updateTable = async (req, res) => {
    try {
        const tableId = req.body.Id;
        const updateTable = await Table.findByIdAndUpdate(tableId, req.body, {
            new: true,
        });
        if (!updateTable) {
            return res.status(400).json({
                status: 400,
                error: "Table Not updated!.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Table Updated successfully",
            data: updateTable,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating table:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const deleteTable = async (req, res) => {
    try {
        const tableId = req.body.Id;
        const tableDelete = await Table.findByIdAndDelete(tableId);
        if (!tableDelete) {
            return res.status(400).json({
                status: 400,
                error: "Table Not Deleted!.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Table Deleted successfully",
            data: tableDelete,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating table:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}

module.exports = { createTable, getTable, getTableById, updateTable, deleteTable };