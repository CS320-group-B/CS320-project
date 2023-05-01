const mongoose = require('mongoose');

const sectionSchema = mongoose.Schema({
    start: String,
    end: String,
    year: Number,
    key: Number,
    season: String,
    courseKey: String,
    type: String,
    days: [Number],
    location: String,
    professor: [String] 
});

const Section = mongoose.model('Section', sectionSchema)

module.exports = { Section, sectionSchema };
