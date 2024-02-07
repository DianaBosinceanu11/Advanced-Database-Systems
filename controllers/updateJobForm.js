
const Jobs = require('../models/Jobs')
module.exports = async(req, res) => {
    // console.log(req.params.id)
    //await Products.findOne({_id: req.params.id})
    const result = await Jobs.findById(req.params.id)
    console.log(result)

    res.render('yourjobs', {job: result})
}



