const express = require("express");
const app = express();
const Cors = require("cors");
const mongoose = require("mongoose");

app.use(Cors());
app.use(express.json());

mongoose.connect("mongodb+srv://marco-admin:1Cioccolata@cluster0.6ppw7.mongodb.net/detailsDB");

app.use("/", require("./routes/noteRoute"))

app.listen(3001, function() {
    console.log("express server is running on port 3001")
})