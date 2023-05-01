const { Professor } = require('../models/professor.js'); // import the Course mongoose model

// @desc    Get all professors
const getProfessors = async (req, res) => {
    try {
        const courses = await Professor.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { getProfessors };