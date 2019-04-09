const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age:Number,
  major:String
});


const userModel = mongoose.model('school', userSchema);

module.exports = userModel;