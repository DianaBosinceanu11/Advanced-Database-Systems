const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },

    salary: {
    type: String,
    required: true
    },

    location: {
    type: String,
    required: true
    },

    description: {
    type: String,
    required: false
    },

    workingmodel:{
        type: String,
        required: true
    },

    jobtype:{
        type: String,
        required: true
    },

   

});

const Jobs = mongoose.model('Jobs', jobSchema, 'jobs');

module.exports = Jobs;
//export default Jobs;
