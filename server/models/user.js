const Course = require('./course.js');

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    taken: [Course], 
    planned: [Course]
});

const User = mongoose.model('User', userSchema);

module.exports = User;