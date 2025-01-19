const express = require("express");
const { getUser, createUser, getSingleUser } = require("../Controller/userController");
const router = express.Router();

router.get('/users',getUser);

router.post('/users',createUser);

router.get('/users/:id',getSingleUser);

module.exports = router;