const connectToMongoDB = require("./DB");
const generateToken = require("./generateToken");
const generateHashedPassword = require("./genPassword");
const verifyPassword = require("./verifyPassword");



 module.exports = { connectToMongoDB, generateToken, generateHashedPassword, verifyPassword };
