const Jobs = require('../models/Jobs');

module.exports = async (req, res) => {
    const jobsItems = await Jobs.find();

    res.render('joboffers', {jobs: jobsItems})
}