const jwt = require("jsonwebtoken");

require("dotenv").config();

const authToken = (req, res, next) => {

    const token = req.body.token;

    if (!token) {
        return res.status(401).json({
            status: 401,
            error: "Authorised is Not Provied.",
        })
    }

    jwt.verify(token, process.env.jwt_secretKey, (error, user) => {
        if (error) {
            return res.status(403).json({
                status: 403,
                error: "Invalid Token.",
            })
        }
        req.user = user;
        next();
    });
}

module.exports = { authToken };