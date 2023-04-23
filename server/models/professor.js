const mongoose = require('mongoose');

const nameSchema = mongoose.Schema({
    first: String,
    last: String
});

const professorSchema = mongoose.Schema({
    name: nameSchema,
    key: String,
    email: String,
    phone: String,
    office: String,
    website: String,
    webpage: String,
    interests: String,
    avatar: String,
    research: String,
    activities: [String],
    rating: Number,
    difficulty: Number,
    reviews: Number
});

const Professor = mongoose.model('Professor', professorSchema)

module.exports = { Professor, professorSchema };
