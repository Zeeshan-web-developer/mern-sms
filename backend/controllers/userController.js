const UserModel = require('../models/UserModel');
const mongoose = require('mongoose');

// @desc create a user
// @route POST /api/v1/users
// @access public

exports.createUser = async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    };
}

//@get all users
//@route GET /api/v1/users
//@access private
exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find();
    res.send(users);
}
