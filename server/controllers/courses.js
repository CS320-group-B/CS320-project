const { Course } = require('../models/course.js'); // import the Course mongoose model
const { rankCourses } = require('../services/tracking_algorithm.js');
// @desc    Get all courses
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find(); // find() is a mongoose method
        res.status(200).json(courses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// @ Get a course with a course key
const getCourse = async (req, res) => {
    try {
        const course = await Course.findOne({"key":req.params.id});
        res.status(200).json(course);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// @desc    Add a course
const addCourse = async (req, res) => {
    const course = req.body;
    const newCourse = new Course(course);
    try {
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
// @desc    Update existing course
const updateCourse = async (req, res) => { 
    try {
        const updatedCourse = await Course.findOneAndUpdate({"_id": req.params.id}, req.body , {new: true});
        if (!updatedCourse){return res.status(404).json("Course not found");}
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
// @desc    Delete Existing Course
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findOneAndRemove({"_id": req.params.id});

        if (!course) return res.status(204).json({ message: "Course not found" }); // Entry not found in database

        res.status(200).json({ message: "Course deleted successfully" }); // Entry found and deleted
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const rankCourse = async (req, res) => {
    const { coursesTaken, preferences, season } = req.body;
  
    try {
      const { courses } = await rankCourses(coursesTaken, preferences, season);
  
      res.status(200).json({ result: courses });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};
module.exports = { getCourses, getCourse, addCourse, updateCourse, deleteCourse, rankCourse};