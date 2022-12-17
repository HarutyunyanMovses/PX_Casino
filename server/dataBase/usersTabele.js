// libs
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

//secret
const SECRET = require("..//config");

const generateAccesToken = (email, roles) => {
  const payload = {
    email,
    roles,
  };
  return jwt.sign(payload, SECRET.SECRET.secret, { expiresIn: "240s" });
};