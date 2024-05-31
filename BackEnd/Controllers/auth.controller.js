const User = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require("dotenv").config();


const LogIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: 400,
                error: "All fields (Email, Password) are required.",
            });
        }

        // Find user data from User
        const userData = await User.findOne({ email });
        if (!userData) {
            return res.status(404).json({
                status: 404,
                error: "User not found.",
            });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, userData.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                status: 400,
                error: "Incorrect password.",
            });
        }

        const token = jwt.sign(
            { email: userData.email, userId: userData._id },
            process.env.jwt_secretKey,
            { expiresIn: '4h' } // Optional: token expiration time
        );

        // Return and response
        res.status(200).json({
            status: 200,
            message: "User logged in successfully",
            data: userData,
            token: token,
        });

    } catch (error) {
        // Handle unexpected error
        console.error("Error logging in user:", error);
        res.status(500).json({
            status: 500,
            error: "Internal server error",
        });
    }
};

module.exports = { LogIn };
