const mongooose = require('mongoose');
const User = require('../models/UserModel');

// login
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        // check if both email and password are provided
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({
                message: 'Please provide both email and password'
            });
        }
        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
       
        // check if password is correct
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({
                message: 'Invalid password'
            });
        }
        // // generate token
        const token = await user.generateAuthToken();
             res.status(200).json({ success: true,token:token,user:user });

    }
    catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}