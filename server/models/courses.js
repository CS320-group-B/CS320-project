const mongoose = require('mongoose');

const prerequisitesSchema = mongoose.Schema({
    options: [String]
});

const courseSchema = mongoose.Schema({
    name: String,
    key: String,
    credits: Number,
    number: String,
    professors: [String],
    subject: String,
    description: String,
    prerequisites: [prerequisitesSchema]
});

const Course = mongoose.model('courses', courseSchema)

module.exports = {
    CourseCollection: Course,
    courseSchema
  }
