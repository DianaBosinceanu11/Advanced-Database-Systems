const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cvsSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    phone: {
        countryCode: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    currentjob: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    // path: {
    //     type: String,
    //     required: true
    // },
});

const CVS = mongoose.model('CVS', cvsSchema, 'cvs');
module.exports = CVS;

