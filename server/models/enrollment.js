import mongoose from 'mongoose';
import Student from "./student.js";
import Section from "./section.js";

const enrollmentSchema = mongoose.Schema({
    id: String,
    student: Student,
    section: Section,
    Date: {
        type: Date,
        default: new Date()
    },
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

export default Enrollment;