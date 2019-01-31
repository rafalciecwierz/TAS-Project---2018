const Joi = require('Joi');
const {User} = require('../models/user');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//Token for client
let newToken = new Object({
  'token': '',
  'isAdmin': false,
  'username': ''
});

//  POST METHOD - USER LOGIN
router.post('/', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
    let user = await User.findOne({ email: req.body.email});
    if(!user) return res.status(400).send('Invalid email or password');

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).send('Invalid email or password');

    const token = user.generateAuthToken();
    newToken = {
      token: token,
      isAdmin: user.isAdmin,
      username: user.name
    };
    res.send(newToken);

});

//Validation
function validate(req) {
    const schema = {
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required(),
    };
  
    return Joi.validate(req, schema);
  }


module.exports = router;