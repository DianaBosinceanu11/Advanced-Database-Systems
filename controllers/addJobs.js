const Jobs = require('../models/Jobs');

module.exports = async (req, res) => {
    const jobsItems = [
        { title: 'Senior Java Developer', company: 'google', salary: '250', location: 'Poland', description: 'Java 11, Spring Boot, Microservices', path: '' },
        { title: 'Middle Java Developer', company: 'google', salary: '250', location: 'Poland', description: 'Java 11, Spring Boot, Microservices', path: '' },
        { title: 'Junior Java Developer', company: 'google', salary: '250', location: 'Poland', description: 'Java 11, Spring Boot, Microservices', path: '' },
    ];

    await Jobs.insertMany(jobsItems)
    //await Jobs.deleteMany()
    res.send('Successfully Added!')

    

};
//delete this page