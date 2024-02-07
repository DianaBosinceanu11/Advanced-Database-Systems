const CVS = require('../models/CVS');

module.exports = async (req, res) => {
    const cvstItems = await CVS.find();

    console.log(cvstItems)

    res.send(cvstItems)


};
