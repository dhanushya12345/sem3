const express = require("express");
const users = express.Router();

const AdminController = require('../controller/AdminController');


users.post("/register",AdminController.register);

users.post("/login", AdminController.login);


module.exports = users;
 
 