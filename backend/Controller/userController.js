const User = require("../Model/users");

// creating users
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
    console.log("Creating new User...");
  } catch (error) {
    console.log(error);
  }
};

// get all user
const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    console.log("Get all User...");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching contacts" });
  }
};

// get single user
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
    console.log(" get single User...");
  } catch (error) {
    console.log(error);
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    // const { id } = req.params;
    // const { name } = req.body;

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
    console.log("Updating  User...");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating user" });
  }
};

// for delete user
const deleteUser = async (req, res) => {
  try {
    const deleteUsers = await User.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({ message: "Contact deleted successfully" });
    console.log("Delete User...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, getUser, getSingleUser, updateUser, deleteUser };
