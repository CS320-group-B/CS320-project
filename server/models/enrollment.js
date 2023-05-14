const mongoose = require('mongoose');

const enrollmentSchema = mongoose.Schema({
    id: String,
    year: Number,
    season: String,
    student_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    course_key: { type: String, required: true },
    date: Date
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema)

module.exports = { Enrollment, enrollmentSchema };
