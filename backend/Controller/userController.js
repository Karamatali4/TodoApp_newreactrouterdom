const User = require("../Model/users");

// Routes
const createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  }
  
  const getUser = async (req, res) => {
    const users = await User.find();
    res.send(users);
  }
  
  const getSingleUser =  async (req, res) => {
    const user = await User.findById(req.params.id);
    res.send(user);
  }

  module.exports = {createUser,getUser,getSingleUser};