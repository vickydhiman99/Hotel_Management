//=======import All Types Modules & Packages Start=======>>
const express = require("express");

const app = express();

const cors = require("cors");

const bodyParser = require("body-parser");

const http = require("http");

// const https = require("https");

const mongoose = require("mongoose");

// const fs = require("fs");

const { rateLimit } = require("express-rate-limit");

const logger = require("morgan");
//==========import All Types Modules & Packages End==========>>


// =====================use of mongoose start================//
require("dotenv").config();

const port = process.env.port || 5555;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.mongoURI)
    .then(() => {
        console.log("Mongoose Connected Succesfully");
    })
    .catch((error) => {
        console.log("Mongoose Conenction Error:", error);
    });
// =====================use of mongoose end=================//


// ===============use of limites start=======================//
// Adding rate Limiter to all the Request
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);
// ===============use of limiter End========================//

// ======================used of body-parser start===========//
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
    .use(bodyParser.json({ limit: '50mb' }))
    .use(cors({ "Acces-Control-Allow-Origin": "*" }))
// ======================used of body-parser start===========//



// ==================used of morgan As logger start================>>
logger.token("body", (req, res) => JSON.stringify(req.body));

app.use(logger("tiny"));
// ==================used of morgan As logger End==================>>


// ---------------import all typed folder And Files Start----------//
require("./Routes/index.routes")(app);
// ---------------import all typed folder And Files End------------//

app.get("/",(req, res)=>{
    res.send("hello vicky")
})

// =======================Server Created Start=====================//
const server = http.createServer(app);

server.listen(port, () => {
    console.log("Server is Running On Port:" + port);
});
// ======================Server Created End========================//

