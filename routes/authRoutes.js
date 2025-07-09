const { login, register } = require('../controllers/authcontroller');

const route = require('express').Router();


route.get('/profile',login);
route.post('/register',register);



module.exports = route;