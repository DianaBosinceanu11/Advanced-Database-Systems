const Jobs = require('../models/Jobs')
//const path = require('path');
module.exports = async(req, res) => {

    
    console.log(req.body);
    console.log(req.files);

    if(!req.files) {
        //just keep the same image and update the rest of the values
    //   console.log("You didn't uploaded a file")
      await Products.updateOne({_id: req.body._id}, {
        title: req.body.title,
        company: req.body.company,
        salary: req.body.salary,
        location: req.body.location,
        description: req.body.description,
      })
    } else {
        //Update all values

        // let myfile = req.file.myfile;
        // myfile.mv(path.resolve(__dirname, '..public/files', myfile.name));

        await Products.updateOne({_id: req.body._id}, {
            title: req.body.title,
            company: req.body.company,
            salary: req.body.salary,
            location: req.body.location,
            description: req.body.description,
          })
    }
    
    
    //res.redirect('/yourjobs')
    res.render('Successfully updated!')
}