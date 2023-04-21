const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    name: String,
    key: String,
    credits: Number,
    number: String,
    subject: String,
    description: String,
    prerequisites: [String],
    professors: [String]
});

const Course = mongoose.model('Course', courseSchema)

module.exports = { Course, courseSchema };
