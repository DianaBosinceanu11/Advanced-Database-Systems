const Jobs = require('../models/Jobs')

module.exports = async (req, res) => {
    const jobsItems = await Jobs.find();

    console.log(jobsItems)

    res.send(jobsItems)

};
