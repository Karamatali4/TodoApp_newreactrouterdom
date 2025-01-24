const User = require("../Model/users");


// creating users
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
    
  }
  
  const getUser = async (req, res) => {
    const users = await User.find();
    res.send(users);
  }
  
  // get single user
  const getSingleUser =  async (req, res) => {
    const user = await User.findById(req.params.id);
    res.send(user);
  }

  // for update user
  const updateUser = async(req,res) => {
    try {
      const {id} = req.params.id;
      const {name,age,email}  = req.body;
      const updateUser = await User.findByIdAndUpdate(
        id,
        name,age,email,
        {
          new:true
        }
      );
      if(!updateUser){
        return res.status(404).json({message:"user not found"});
      }
      res.json(updateUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error updating contact' });
    }
  }
  module.exports = {createUser,getUser,getSingleUser,updateUser};