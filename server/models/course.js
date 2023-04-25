const mongoose = require('mongoose');

const prerequisitesSchema = mongoose.Schema({
    options: [String]
});

const courseSchema = mongoose.Schema({
    name: String,
    key: String,
    credits: Number,
    number: String,
    professors: [{"professor_key": String}],
    subject: String,
    description: String,
    prerequisites: [{"prerequisite_key": String}]
});

const Course = mongoose.model('Course', courseSchema)

module.exports = { Course, courseSchema };
