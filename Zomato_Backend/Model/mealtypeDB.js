const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MealtypeSchema = new Schema({
    _id: Number,
    name: String
})

module.exports = mongoose.model('mealtypeData',MealtypeSchema,'mealtype');