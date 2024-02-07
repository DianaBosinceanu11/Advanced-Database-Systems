const Jobs = require('../models/Jobs');
const path = require('path');

module.exports = async (req, res) => {
    //console.log('I am in addNewPost controller')
    // console.log(req.body)
  //  let myfile = req.file.myfile;
    //console.log(myfile.name)
    //console.log(path.extname(myfile.name))
   // myfile.mv(path.resolve(__dirname, '..public/files', myfile.name));

    //Syntax-01
    // const jobsItems = {title: 'Java', salary: '200', company}...

      

    // Syntax-02
    Jobs.create({
        title: req.body.title,
        company: req.body.company,
        salary: req.body.salary,
        location: req.body.location,
        jobtype: req.body.jobtype,
        workingmodel: req.body.workingmodel,
        description: req.body.description,
       // path: '/files/' +myfile.name
        });

    //const newJobs = new Jobs(browse_jobs);
    //await Jobs.insertMany(browsejobs);
    //await jobs.deleteMany()
    res.redirect('yourjobs');
}