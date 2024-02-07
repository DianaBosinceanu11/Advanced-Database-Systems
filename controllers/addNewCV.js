const CVS = require('../models/CVS');
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
    CVS.create({
            fname: req.body.fname,
            lname: req.body.lname,
            phone: {
                countryCode: req.body.countryCode,
                number: req.body.phone
            },
            email: req.body.email,
            summary: req.body.summary,
            currentjob: req.body.currentjob,
            location: `${req.body.city}, ${req.body.country}`,
            // path: myfile.name
        });

    //const newJobs = new Jobs(browse_jobs);
    //await Jobs.insertMany(browsejobs);
    //await jobs.deleteMany()
    res.redirect('/');
}

