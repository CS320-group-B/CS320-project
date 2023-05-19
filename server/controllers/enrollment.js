const {Enrollment} = require('../models/enrollment.js');

//@desc     adds enrollment with a reference to the current user and a given course
const addEnrollment = async(req,res) =>{
    try {
        let tmp = req.body;
        tmp.student_id = req.userId;
        const enrollment = new Enrollment(tmp);
        await enrollment.save();
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
//@desc     deletes enrollment containing a reference to the current user and the given course
const deleteEnrollment = async (req, res) => {
    try {
        const enrollment = await Enrollment.findOneAndRemove({"student_id": req.userId, "course_key": req.body.course_key});

        if (!enrollment) return res.status(204).json({ message: "Enrollment not found" }); // Entry not found in database

        res.status(200).json({ message: "Enrollment deleted successfully" }); // Entry found and deleted
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//@desc     gets all enrollments referencing the current user
const getEnrollment = async (req, res) => {
    try {
        const enrollments = await Enrollment.find({"student_id": req.userId});
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//@desc     updates the enrollment referencing the current user and the given course
const updateEnrollment = async (req, res) => {
    try {
        let upd = req.body;
        if (upd.hasOwnProperty("student_id")){delete upd.student_id;}// prevents users from enrolling other users

        const updatedEnrollment = await Enrollment.findOneAndUpdate({"student_id": req.userId, "course_key": upd.course_key}, upd , {new: true});
        if (!updatedEnrollment){return res.status(404).json({ message: "Enrollment not found" });}
        res.status(200).json(updatedEnrollment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
module.exports = {addEnrollment, deleteEnrollment, getEnrollment, updateEnrollment};