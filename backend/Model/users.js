const { default: mongoose } = require("mongoose");

// Schema
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email:String,
  });
  
  const User = mongoose.model('users', UserSchema);

  module.exports = User;