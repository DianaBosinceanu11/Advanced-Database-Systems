const Jobs = require('../models/Jobs');
module.exports = async (req, res) => {
    
    console.log(req.params.id);
    await Jobs.deleteOne({ _id: req.params.id });

    //await Jobs.deleteMany()
    //res.send('Successfully Deleted!')
    res.redirect('/yourjobs');
};




// const Jobs = require('../models/Jobs');

// module.exports = async (req, res) => {
//     try {
//         const deletedJob = await Jobs.findByIdAndDelete(req.params.id);
//         if (deletedJob) {
//             console.log(`Deleted job with ID: ${deletedJob._id}`);
//             res.redirect('/yourjobs'); // Redirect after successful deletion
//         } else {
//             console.log(`Job with ID ${req.params.id} not found`);
//             res.status(404).send('Job not found'); // Handle if job with given ID is not found
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error'); // Handle other errors
//     }
// };





