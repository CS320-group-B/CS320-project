import mongoose from 'mongoose';
import Course from './course.js'

const sectionSchema = mongoose.Schema({
    id: String,
    course: Course,
    year: Number,
    season: String,
    days: [Number],
    startTime: Number,
    endTime: Number,
    String: location,
});

const Section = mongoose.model('Section', sectionSchema);

export default Section;