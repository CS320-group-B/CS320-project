const {courseSchema} = require('./course.js');

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: { type: String },
    name: { type: String },
    email: { type: String, required: true },
    bio: { type: String },
    avatar: { type: String },
    subfield: { type: String },
    major: { type: String },
    password: { type: String, required: true },
    taken: [{"course_key": mongoose.Schema.Types.ObjectId}]
});

const User = mongoose.model('User', userSchema);

module.exports = User;