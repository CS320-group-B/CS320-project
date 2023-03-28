const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    id: String,
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

const Course = mongoose.model('courses', courseSchema);

module.exports = Course;
