const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title: String,
    credits: Number,
    number: String,
    frequency: String,
    subject: String,
    description: String,
    startTime: Number,
    endTime: Number
});
// TODO: refactor to use sections Schema

const Course = mongoose.model('Course', courseSchema)

module.exports = Course;
