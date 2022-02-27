const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors')
const app = express();
const authRoutes=require('./routes/auth')
const userRoutes=require('./routes/user')
require('dotenv').config();

mongoose.connect(process.env.DATABASE)
    .then(() => console.log("DB CONNECTED"))
    .catch(()=> console.log("DB NOT CONNECTED"));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app is running at ${port}`)
});