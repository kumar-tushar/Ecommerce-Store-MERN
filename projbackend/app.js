const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors')
const authRoutes=require('./routes/auth')
const userRoutes=require('./routes/user')
const categoryRoutes=require('./routes/category')
const productRoutes=require('./routes/product')
const orderRoutes=require('./routes/order')
const paymentBRoutes=require('./routes/paymentBRoutes')

require('dotenv').config();

const app = express();

mongoose.connect(process.env.DATABASE).then(() => console.log("DB CONNECTED")).catch(()=> console.log("DB NOT CONNECTED"));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", paymentBRoutes);

const port = process.env.PORT || 8000;


app.listen(port, () => {console.log(`App is running @ http://localhost:${port}`)});
