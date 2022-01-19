const express = require("express");
const users = express.Router();

const CashierController = require('../controller/CashierController');


users.post("/cashierregister",CashierController.register);

users.post("/login", CashierController.login);


module.exports = users;
 