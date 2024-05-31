const Food = require("../Models/food.model");

const createFood = async (req, res) => {
    try {
        const { foodType, foodName, image, foodPrice} = req.body;

        if (!foodType || !["Veg", "NonVeg", "Drink"].includes(foodType)) {
            return res.status(400).json({
                status: 400,
                error: "Invalid foodType. Must be one of: Veg, NonVage, Drink",
            })
        }

        if (!foodName || !image || !foodPrice) {
            return res.status(400).json({
                status: 400,
                error: "All fields (Name, image, price) are required.",
            })
        }

        // create a new food with the hashed password
        const newFood = new Food({
            foodType, 
            foodName, 
            image, 
            foodPrice
        })

        // save the food to the database
        const saveFood = await newFood.save();
        if (!saveFood) {
            return res.status(400).json({
                status: 400,
                error: "Food is Not created.",
            })
        }

        // return the response
        res.status(200).json({
            status: 201,
            message: "Food created successfully",
            data: saveFood,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating food:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const getFood = async (req, res) => {
    try {
        const getFooddata = await Food.find();
        if (!getFooddata) {
            return res.status(400).json({
                status: 400,
                error: "Food Data Get Not Found.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Food Data Get successfully",
            data: getFooddata,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating food:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const getFoodById = async (req, res) => {
    const { Id } = req.body;
    try {
        const getFoodbyid = await Food.findById(Id);
        if (!getFoodbyid) {
            return res.status(400).json({
                status: 400,
                error: "Food Data Get Not Found.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Food Data Get successfully",
            data: getFoodbyid,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating food:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const updateFood = async (req, res) => {
    try {
        const foodId = req.body.Id;
        const updateFood = await Food.findByIdAndUpdate(foodId, req.body, {
            new: true,
        });
        if (!updateFood) {
            return res.status(400).json({
                status: 400,
                error: "Food Not updated!.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Food Updated successfully",
            data: updateFood,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating food:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const deleteFood = async (req, res) => {
    try {
        const foodId = req.body.Id;
        const foodDelete = await Food.findByIdAndDelete(foodId);
        if (!foodDelete) {
            return res.status(400).json({
                status: 400,
                error: "Food Not Deleted!.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "Food Deleted successfully",
            data: foodDelete,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating food:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}

module.exports = { createFood, getFood, getFoodById, updateFood, deleteFood };