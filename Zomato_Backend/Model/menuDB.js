const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('menuData',MenuSchema,'menu');