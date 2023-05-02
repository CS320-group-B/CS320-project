const { Professor } = require('../models/professor.js'); // import the Course mongoose model

// @desc    Get all professors
const getProfessors = async (req, res) => {
    try {
        const profs = await Professor.find();
        res.status(200).json(profs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const getProf = async (req, res) => {
    try {
        const prof = await Professor.findOne({"key":req.params.id});
        res.status(200).json(prof);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const addProfessor = async (req, res) => {
    const prof = req.body;
    const newProf = new Professor(prof);
    try {
        await newProf.save();
        res.status(201).json(newProf);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
const updateProf = async (req, res) => { 
    try {
        const updatedProf = await Course.findOneAndUpdate({"_id": req.params.id}, req.body , {new: true});
        if (!updatedProf){return res.status(404).json("Professor not found");}
        res.status(200).json(updatedProf);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const deleteProf = async (req, res) => {
    try {
        const prof = await Professor.findOneAndRemove({"_id": req.params.id});

        if (!prof) return res.status(204).json({ message: "Professor not found" }); // Entry not found in database

        res.status(200).json({ message: "Professor deleted successfully" }); // Entry found and deleted
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
module.exports = { getProfessors, getProf, addProfessor, updateProf, deleteProf};