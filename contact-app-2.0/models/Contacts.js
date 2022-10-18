const mongoose = require('mongoose'); //this helps get import mongoose as a dependency

const ContactSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add your name']
    },
    phone: {
        type: Number,
        required: [true, 'Please put your number']
    },
    email: {
        type: String,
        required: [true, 'Please input your email']

    }
});


module.exports = mongoose.model('Contact', ContactSchema);