const express = require("express");
const { getUser, createUser, getSingleUser,updateUser, deleteUser } = require("../Controller/userController");
const router = express.Router();

router.get('/users',getUser);

// for creating users
router.post('/users',createUser);

// get single user
router.get('/users/:id',getSingleUser);

// for update users
router.put("/users/:id",updateUser);


// for Delete users
router.delete("/users/:id",deleteUser);

module.exports = router;