const User = require("../models/User");

exports.addUser = (req, res) => {
    const { name, age, maritalStatus, company, education, mobile, location, email, password } = req.body;
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            res.status(409).json({
                error: "User Exist"
            });
        } else {
            User.create({
                name: name.toUpperCase(),
                mobile: mobile,
                email: email.toLowerCase(),
                password: password,
                age: age,
                maritalStatus: maritalStatus,
                company: company,
                education: education,
                location: location
            }).then((user) => {
                res.status(200).json({ result: user })
            }).catch((err) => {
                res.status(500);
            })
        }
    })
};

exports.getUser = async (req, res) => {
    User.find({}).then((result) => {
        if (result) {
            res.status(200).json({ results: result })
        } else {
            res.status(404).json({ error: "Not Found" })
        }
    }).catch(err => {
        console.log(err);
        res.sendstatus(500);
    })
};