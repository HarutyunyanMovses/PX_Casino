const mongoose = require('mongoose')

const usersSchame = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  ability:{
    type : Number,
    default: 0
  },
  roles: {
    type: String,
    ref: "Role",
  },
},{timestamps: true});

module.exports = mongoose.model("Users", usersSchame);
