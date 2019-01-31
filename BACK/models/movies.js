const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema} = require('./genres');

const Movie = mongoose.model('Movie', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 255
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    imagePath: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Number,
        required: true,
        min: 0,
        max: 3000
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    timestamp: {
        type: Date, 
        default: Date.now
    }
}));

function validateMovie(movie){
    const schema = {
        title: Joi.string().min(1).required(),
        description: Joi.string().min(0).required(),
        imagePath: Joi.string().min(0).required(),
        genreId: Joi.objectId().required(),
        year: Joi.number().min(0).max(3000).required(),
        numberInStock: Joi.number().min(0).max(255).required(),
        dailyRentalRate: Joi.number().min(0).max(255).required()
    }
    return Joi.validate(movie,schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;