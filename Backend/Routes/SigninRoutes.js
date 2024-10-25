const express = require("express");
const routes = express.Router();
const signapi = require('../Controller/signinController');

routes.post('/addnewadmin', signapi.AddnewAdmin);

module.exports = routes;