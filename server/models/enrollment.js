const mongoose = require('mongoose');

const enrollmentSchema = mongoose.Schema({
    id: String,
    year: Number,
    season: String,
    student_id: String,
    courseKey: String,
    sectionKey: Number,
    date: Date
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema)

module.exports = { Enrollment, enrollmentSchema };
