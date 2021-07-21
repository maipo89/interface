const express = require("express");
const router = express.Router();
const Step = require("../models/noteModel");

router.route("/create").post((req, res) => {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const eMail = req.body.eMail;
    const telephone = req.body.telephone;
    const birth = req.body.birth;
    const comments = req.body.comments;
    const newStep = new Step({
        fName,
        lName,
        eMail,
        telephone,
        birth,
        comments
    })

    newStep.save()
})

module.exports = router;