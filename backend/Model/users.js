const { default: mongoose } = require("mongoose");

// Schema
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email:String,
  });
  
  const User = mongoose.model('User', UserSchema);

  module.exports = User;