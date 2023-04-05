import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    id: String,
    title: String,
    credits: Number,
    subject: String,
    description: String,
    prerequisites: [String]
});

const Course = mongoose.model('Course', courseSchema);

export default Course;