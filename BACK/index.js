const config = require('config');           //Config module for getting variables - jwtToken
const mongoose = require('mongoose');       //MongoDB package
const Joi = require('joi');                 //Joi validating
Joi.objectId = require('joi-objectid')(Joi); //For validating objectId in mongoDB
//ROUTES
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');
//EXPRESS PACKAGE
const express = require('express');
const app = express();

if(!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
}

// DB CONNECTION
mongoose.connect('mongodb://localhost/TAS')
    .then( () => console.log('Connected to TAS Database...'))
    .catch(err => console.error('Could not connect to TAS MongoDB...'));


app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Welcom in our server. Listening on port ${port}...`));