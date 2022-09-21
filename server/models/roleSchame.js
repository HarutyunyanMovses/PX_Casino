const mongoose = require('mongoose')

const Role = new mongoose.Schema({
  value: {
    type: String,
    unique: true,
    default: "USER",
  },
});

module.exports = mongoose.model("Role", Role);
