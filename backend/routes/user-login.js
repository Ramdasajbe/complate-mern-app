const express = require("express");
const { login } = require("../controller/user-auth");
const xyz = express.Router();
xyz.route("/auth").post(login);

module.exports = xyz;
