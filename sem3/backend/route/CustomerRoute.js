const express = require("express");
const users = express.Router();

const CustomerController = require('../controller/CustomerController');


users.post("/register",CustomerController.register);

users.post("/login", CustomerController.login);

users.get("/profile",CustomerController.get_user);

users.put('/update',CustomerController.update);

module.exports = users;
 