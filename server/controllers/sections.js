const { Section } = require('../models/section');

// @desc    Get all sections
const getSections = async (req, res) => {
    try {
        const sections = await Section.find();
        res.status(200).json(sections);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { getSections };