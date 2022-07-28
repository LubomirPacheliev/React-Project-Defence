const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required.']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required.'],
        validate: {
            validator: val => /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val),
            message: 'Email is not valid.'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        validate: {
            validator: val => /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*[!#$%&? "]).*$/.test(val),
            message: 'Password must have at least 8 characters, 1 capital letter and 1 special character.'
        }
    }
});

module.exports = mongoose.model("User", userSchema);