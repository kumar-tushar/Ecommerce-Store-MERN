const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors')
const authRoutes=require('./routes/auth')
const app = express();
require('dotenv').config();

mongoose.connect(process.env.DATABASE)
    .then(() => console.log("DB CONNECTED"))
    .catch(()=> console.log("DB NOT CONNECTED"));

app.use(bodyParser.json());
app.use(cookieParser());
// noinspection JSCheckFunctionSignatures
app.use(cors());

app.use("/api", authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app is running at ${port}`)
});