const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoDb= require('./config/db');
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
// load env variables
dotenv.config({ path: "./config/config.env" });
mongoDb();



//Builit in middlewar
app.use(cors());
app.use(express.json()) // express.json() is a middleware which is used to parse the incoming request body in JSON format.

// custom middleware
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/users", userRoutes)
app.listen(9000, () => {
    console.log("http://localhost:9000/");
})