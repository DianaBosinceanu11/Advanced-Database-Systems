const Job = require('../models/Jobs');

module.exports = async (req, res) => {
    const currentPage = parseInt(req.query.page) || 1;
    const jobsPerPage = 5;

    try {
        // Count total number of jobs
        const totalJobs = await Job.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalJobs / jobsPerPage);

        // Fetch jobs for the current page
        const jobs = await Job.find().skip((currentPage - 1) * jobsPerPage).limit(jobsPerPage);

        // Render the 'joboffers' view and pass the currentPage, totalPages, and jobs variables
        res.render('joboffers', { currentPage, totalPages, jobs });
    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).send('Internal Server Error');
    }
};
