const mongoose = require("mongoose");


const games = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        src: {
            type: String
        }
    },
    { timestamps: true }
)
module.exports = mongoose.model("Games", games);