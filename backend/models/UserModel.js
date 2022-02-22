const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
        trim: true,
        lowercase: true,
    },
    dob:{
    type: String,
    required: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long']

    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'

    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    
});

// hash the password before saving
UserSchema.pre('save', async function (next) {
    const user = this;
// only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
        next();
});

// compare the password entered by the user to the hashed password in the database
UserSchema.methods.matchPassword = async function (enteredPassword) {
    // enteredPassword is the password entered by the user
    // this.password is the hashed password in the database
    return await bcrypt.compare(enteredPassword, this.password);
};

// generate the JWT WHEN USER LOGS IN and registers
UserSchema.methods.generateAuthToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRY,
    });
};

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
