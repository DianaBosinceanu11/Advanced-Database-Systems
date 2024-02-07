const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    password: {
    type: String,
    required: true
    },

});

// Middleware to hash the password before saving
userSchema.pre('save', function(next) {
    console.log("I am in bcrypt hash pre function");
    const user = this;


    bcrypt.hash(user.password, 10, function(error, hash) {
        if (error) {
            console.error(error);
            return next(error);
        }

        console.log(hash);
        user.password = hash;
        next();
    });
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;

