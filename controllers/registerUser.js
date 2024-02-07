const Users = require('../models/Users')
const path = require('path')

module.exports = async (req, res) => {

   
    Users.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        });


    res.redirect('/');
}