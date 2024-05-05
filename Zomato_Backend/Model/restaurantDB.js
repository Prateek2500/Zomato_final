const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    id: Number,
    city: Number
})

module.exports = mongoose.model('restaurantData',RestaurantSchema,'restaurant');