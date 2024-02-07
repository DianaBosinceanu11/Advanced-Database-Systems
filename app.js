const express = require('express');
const path = require('path');

const app = express();
const ejs = require('ejs')
app.set('view engine', 'ejs')

app.use(express.static('public'));


// //PAGE NUMBER IMPLEMENTATION START

// // Set the views directory
// app.set('views', path.join(__dirname, 'views'));

// // Middleware to calculate total pages
// app.use((req, res, next) => {
//     const itemsPerPage = 5; // Adjust this based on your pagination requirements
//     res.locals.totalPages = Math.ceil(Jobs.length / itemsPerPage);
//     next();
// });

// // Route to render the job listings with pagination
// app.get('/getJobs', (req, res) => {
//     const currentPage = parseInt(req.query.page) || 1;
//     const itemsPerPage = 5; // Adjust this based on your pagination requirements

//     // Dummy data (replace this with your database query from Jobs.js)
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const jobsToShow = Jobs.slice(startIndex, endIndex);

//     res.render('jobList', {
//         jobs: jobsToShow,
//         currentPage: currentPage,
//     });
// });
// //PAGE NUMBER IMPLEMENTATION END

//Express Sessions ***
const session = require('express-session');
app.use(session({
    secret: "keyboard Cat",
    resave: false,
    saveUninitialized: true
}));

//dot
// const dotnev = require('dotnev')
// dotnev.config();


// console.log(process.env)


const fileUload = require('express-fileupload');
app.use(fileUload());

//to receive the parameter, we need to install the body-parser package
// > npm install body-parser


const bodyParser = require('body-parser');
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
 
// Import mongoose after the instalation
const mongoose = require('mongoose');

//Connect with the mongodb database
//mongoose.connect('mongodb://localhost/schema').then(() =>{
//   console.log('Connection successful')
//});

// If you have issue connecting with mongodb using the localhost url then use this url 



mongoose.connect('mongodb://127.0.0.1/browse_jobs').then(() =>{
    console.log('Connection successful')
});

// let mongodb_uri = process.env.MONGODB_URI_LOCAL
// mongoose.connect(mongodb_uri).then(() =>{
//     console.log('Connection successful')
// });




//import Jobs from './models/Jobs'
const Jobs = require('./models/Jobs')

//import CVS from'./models/CVS'
const CVS = require('./models/CVS')

//import CVS from'./models/Users'
const Users = require('./models/Users')



//Middleware it's a function that will run on every request***

const exampleMiddleware = (req, res, next) => {
   console. log("Thanks for your request. You will get response soon")

   next() //if I don't provide next ()funciton, it will hang here
}

app.use(exampleMiddleware)
//This is global variable and any global variable is accesible from anywhere, even in EJS as well
global.loggedIn = null;

app.use('*', (req, res, next) => {
    //console.log('My session middleware')
    loggedIn = req.session.userId;
    console.log(loggedIn)

    next()
})




//acces the controller CONTROLLERS SECTION
const indexController = require('./controllers')
app.get('/', indexController)

const contactController = require('./controllers/contact');
app.get('/contact', contactController);

const blogController = require('./controllers/blog');
app.get('/blog', blogController);

const pagesController = require('./controllers/pages');
app.get('/pages', pagesController);


const yourjobsController = require('./controllers/yourjobs');
app.get('/yourjobs', yourjobsController);




const newPostFormController = require('./controllers/newPostForm');
app.get('/newPostForm', newPostFormController);



const addJobsController = require('./controllers/addJobs');
app.get('/addJobs', addJobsController);

// const jobsValidationMiddleware = (req, res, next) => {
// //    console.log("I am in jobValidationMidleware")
// //    console.log(req.files.file)
//     if(req.body.title == null || req.body.company == null || req.body.salary == null || req.body.location == null || req.body.description == null || req.files == null){
//         console.log("Sorry all the fields are mandatory")
//         return res.redirect('/new/addNewPost')
//     }
//     next()
// }
// app.use('/addNewPost', jobsValidationMiddleware)


const addNewPostController = require('./controllers/addNewPost');
app.post('/addNewPost', addNewPostController);

const registerUserController = require('./controllers/registerUser');
app.post('/registerUser', registerUserController);


const userRegistrationFormController = require('./controllers/userRegistrationForm');
app.get('/userRegistrationForm', userRegistrationFormController)

const candidatesController = require('./controllers/candidates');
app.get('/candidates', candidatesController);







const loginUserController = require('./controllers/loginUser');
app.post('/loginUser', loginUserController);

const loginFormController = require('./controllers/loginForm');
app.get('/loginForm', loginFormController);


const logoutController = require('./controllers/logout');
app.get('/logout', logoutController);



const deleteJobsController = require('./controllers/deleteJob');
app.get('/job/delete/:id', deleteJobsController);

const updateJobFormController = require('./controllers/updateJobForm');
app.post('updateJobForm/:id', updateJobFormController);

const updateJobController = require('./controllers/updateJob');
app.post('updateJob/:id', updateJobController);

// const joboffersController = require('./controllers/joboffers');
// app.post('joboffers/:id', joboffersController);

const joboffersController = require('./controllers/joboffers');
app.get('/joboffers', joboffersController);
 
/*
app.get('/addJobs', async (req, res) => {
    const browsejobs = [
        { name: 'Java Developer', salary: 280, path: '' },
        { name: 'Python Developer', salary: 260, path: '' },
        { name: 'Java Developer', salary: 280, path: '' },
        { name: 'Python Developer', salary: 260, path: '' },
        { name: 'Java Developer', salary: 280, path: '' },
        { name: 'Python Developer', salary: 260, path: '' },
        { name: 'Java Developer', salary: 280, path: '' },
        { name: 'Python Developer', salary: 260, path: '' },
    ];
    
    //const newJobs = new Jobs(browse_jobs);
    await Jobs.insertMany(browse_jobs);
    res.send('Successfully added'); 
});
*/

const getJobsController = require('./controllers/getJobs');
//const bodyParser = require('body-parser');
app.get('/getJobs', getJobsController);

/*
//await=> don't retrieve all the data is added not to get too busy the system and to wait in order to upload it
app.get('/getJobs', async (req, res) => {
    try {
        const browse_jobs = await Jobs.find();
        res.send(browse_jobs);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
*/




/*
//DEMONSTRATION PURPOSE!!!!
app.get('/inventory', async(req,res) => {
    const inventoryItems = await Inventory.find();
//await=> don't retrieve all the data is added not to get too busy the system and to wait in order to upload it
    console.log(inventoryItems)

    res.send(inventoryItems);

})
*/





app.get('*', (req, res) => {
    // res.send('Sorry page not found')
    //res.sendFile(path.resolve(__dirname, 'pages/notfound.html'));
    res.render('notfound')
});

const port = 4000;
const hostname = '127.0.0.1';

// const port = process.env.PORT;
// const hostname = process.env.HOSTNAME;


app.listen(port, hostname, () => {
    console.log(`Server ${hostname} is running on port number ${port}`);
    console.log(`Server Url = https://${hostname}:${port}`);
});



/*app.get('/', (req, res) => {
    console.log(`Received request method = ${req.method}, and URL = ${req.url}`);
    // res.send('Welcome to QHO541')
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'));
    res.render('index')

}); */

/*
app.get('/candidates', (req, res) => {
    // res.send('This is my candidates message')
    //res.sendFile(path.resolve(__dirname, 'pages/candidates.html'));
    res.render('candidates')
});
*/

/*
app.get('/blog', (req, res) => {
    // res.send('This is my blog message')
    //res.sendFile(path.resolve(__dirname, 'pages/blog.html'));
    res.render('blog')
});
*/


/*
app.get('/newpost', (req, res) => {
    // res.send('This is my newpost message')
    //res.sendFile(path.resolve(__dirname, 'pages/newpost.html'));
    res.render('newpost')
});
*/

/*app.get('/browsejobs', (req, res) => {
    // res.send('This is my browsejobs message')
    //res.sendFile(path.resolve(__dirname, 'pages/browsejobs.html'));
    res.render('browsejobs')
}); */


/*
app.get('/jobpost', (req, res) => {
    // res.send('This is my jobpost message')
    //res.sendFile(path.resolve(__dirname, 'pages/jobpost.html'));
    res.render('jobpost')
});
*/


/*
app.get('/contact', (req, res) => {
    // res.send('This is my contact message')
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
    res.render('contact')
});
*/



// AM RAMAS LA LECTURE 9 MINUTUL 57

// app has crashed cand ap pus codul co parser