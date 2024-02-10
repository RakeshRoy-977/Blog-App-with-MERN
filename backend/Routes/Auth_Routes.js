const express = require("express");
const { signUp, login } = require("../Controllers/Auth_Con");

const route = express.Router();

route.post(`/signup`, signUp);

route.post(`/login`, login);

module.exports = route;
