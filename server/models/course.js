const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title: String,
    credits: Number,
    number: String,
    frequency: String,
    subject: String,
    description: String,
    prerequisites: [String]
});

const Course = mongoose.model('Course', courseSchema)

module.exports = { Course, courseSchema };
