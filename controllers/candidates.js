const CVS = require('../models/CVS');

module.exports = async (req, res) => {
    const candidatesItems = await CVS.find();

    //console.log(cvsitems)


    res.render('candidates', {candidates: candidatesItems});
};


