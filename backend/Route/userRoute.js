const express = require("express");
const { getUser, createUser, getSingleUser,updateUser } = require("../Controller/userController");
const router = express.Router();

router.get('/users',getUser);

router.post('/users',createUser);

router.get('/users/:id',getSingleUser);

// for update users

router.put("/users/:id",updateUser);
module.exports = router;