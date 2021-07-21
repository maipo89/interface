const mongoose = require("mongoose");

const stepSchema = {
    fName: String,
    lName: String,
    eMail: String,
    telephone: String,
    gender: String,
    birth: String,
    comments: String
}

const Step = mongoose.model("Step", stepSchema);

module.exports = Step;