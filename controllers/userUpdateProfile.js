const CVS = require('../models/CVS');
const path = require('path');

module.exports = async (req, res) => {
    console.log(req.body);
    let myfile = req.files.myfile;
    console.log(myfile.name);
    console.log(path.extname(myfile.name));

    myfile.mv(path.resolve(__dirname, '../public/images', myfile.name));

    // Process the form data and save to the database
    await CVS.create({
        fname: req.body.fname,
        lname: req.body.lname,
        summary: req.body.summary,
        currentjob: req.body.currentjob,
        location: req.body.location,
        path: '/images/' + myfile.name
    });

    // Redirect to a success page after form submission
    res.render('success'); // Access the 'success' view

    // Redirect to the homepage
    // res.redirect('/');




};



