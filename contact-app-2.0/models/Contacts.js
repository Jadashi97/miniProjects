const mongoose = require('mongoose'); //this helps get import mongoose as a dependency

const ContactSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        require: [true, 'Please add your name']
    },
    phone: {
        type: Number,
        require: [true, 'Please put your number']
    }
});


module.exports = mongoose.model('Contact', ContactSchema);