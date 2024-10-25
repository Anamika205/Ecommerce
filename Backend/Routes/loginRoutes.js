const mongoose = require('mongoose');
const express = require('express');
const routes = express.Router();
const loginapi = require('../Controller/loginController');

routes.post('/addlogin', loginapi.createLogin);

module.exports = routes;