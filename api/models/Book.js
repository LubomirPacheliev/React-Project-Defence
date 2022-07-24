const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        validate: {
            validator: val => /^.*(?=.{1,}).*$/.test(val),
            message: 'Name must be longer than 1 character'
        }
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        validate: {
            validator: val => /^.*(?=.{10,}).*$/.test(val),
            message: 'Name must be longer than 10 characters'
        }
    },
    author: {
        type: String,
        required: [true, "Author is required"],
        validate: {
            validator: val => /^.*(?=.{1,}).*$/.test(val),
            message: 'Author name must be longer than 1 character'
        }
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        validate: {
            validator: val => val >= 0,
            message: 'The price must be a positive number.'
        }
    },
    image: {
        type: String,
        required: [true, "Image is required"]
    },
    bought: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Book', bookSchema);