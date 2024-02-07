const Users = require('../models/Users');
const path = require('path');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {

    console.log('I am in loginUser controller')
    //console.log(req.body.username)
    //console.log(req.body.password)
    //const {username, password} = req.body


        const user = await Users.findOne({ username: req.body.username });
        //console.log(user)

        if (user) {
            // User exists; compare the user password with the database-encrypted password
            const encryptedPassword = user.password;
            const unencryptedPassword = req.body.password;
            console.log('Valid User')
            bcrypt.compare(unencryptedPassword, encryptedPassword, (error, same) => {
                if (same) {
                    console.log('User Login Successfully');
                    req.session.userId = user._id;
                    //console.log(req.session)

                    //USER TYPE TO BE IMPLEMENTED!!!
                    //req.session.userType = user.type;
                    res.redirect('/');
                } 
                else {
                    console.log('Wrong Password');
                    // Render login form with an error message for wrong password
                    res.render('loginForm', {
                        invalidUserError: null,
                        invalidUserPassword: 'Wrong Password'
                    });
                }
            });
        } 
        else {
            // User doesn't exist; handle invalid username
            console.log('Invalid Username');
            res.render('loginForm', {
                invalidUserError: 'Invalid User',
                invalidUserPassword: null
            });
        }
    }

