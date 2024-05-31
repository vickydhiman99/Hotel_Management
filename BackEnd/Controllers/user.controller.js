const User = require("../Models/user.model");

const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
    try {
        const { authType, firstName, lastName, image, gender, email, phone, password } = req.body;

        if (!authType || !["Admin", "Customer", "Chef", "Waiter"].includes(authType)) {
            return res.status(400).json({
                status: 400,
                error: "Invalid authType. Must be one of: Admin, Customer, Chef, Waiter",
            })
        }

        if (!firstName || !lastName || !email || !phone || !password || !image || !gender) {
            return res.status(400).json({
                status: 400,
                error: "All fields (authType, firstName, lastName, email, phone, password, image, gender) are required.",
            })
        }

        // check if the email is allready taken
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: 400,
                error: "Email is already registered.",
            })
        }

        // hass the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create a new user with the hashed password
        const newUser = new User({
            authType,
            firstName,
            lastName,
            image,
            gender,
            email,
            phone,
            password: hashedPassword,
        })

        // save the user to the database
        const saveUser = await newUser.save();
        if (!saveUser) {
            return res.status(400).json({
                status: 400,
                error: "User is Not created.",
            })
        }

        // return the response
        res.status(200).json({
            status: 201,
            message: "User created successfully",
            data: saveUser,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating user:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const getUser = async (req, res) => {
    try {
        const getUserdata = await User.find();
        if (!getUserdata) {
            return res.status(400).json({
                status: 400,
                error: "User Data Get Not Found.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "User Data Get successfully",
            data: getUserdata,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating user:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const getUserById = async (req, res) => {
    const { Id } = req.body;
    try {
        const getUserbyid = await User.findById(Id);
        if (!getUserbyid) {
            return res.status(400).json({
                status: 400,
                error: "User Data Get Not Found.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "User Data Get successfully",
            data: getUserbyid,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating user:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const updateUser = async (req, res) => {
    try {
        const userId = req.body.Id;
        const updateUser = await User.findByIdAndUpdate(userId, req.body, {
            new: true,
        });
        if (!updateUser) {
            return res.status(400).json({
                status: 400,
                error: "User Not updated!.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "User Updated successfully",
            data: updateUser,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating user:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}


const deleteUser = async (req, res) => {
    try {
        const userId = req.body.Id;
        const userDelete = await User.findByIdAndDelete(userId);
        if (!userDelete) {
            return res.status(400).json({
                status: 400,
                error: "User Not Deleted!.",
            })
        }
        res.status(200).json({
            status: 201,
            message: "User Deleted successfully",
            data: userDelete,
        })
    }
    catch (error) {
        // handle unexpected error
        console.error("Error creating user:", error);
        res.status(200).json({
            status: 500,
            error: "Internal server error:",
        });
    }
}

module.exports = { createUser, getUser, getUserById, updateUser, deleteUser };