const Course = require('../models/course.js'); // import the Course mongoose model

// @desc    Get all courses
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find(); // find() is a mongoose method
        res.status(200).json(courses);
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
    try{
        Course.findOneAndUpdate({_id: req.params.id}, req.body);
        res.status(200);
    } catch (error){
        res.status(404).json({ message: error.message})
    }
};
// @desc    Delete Existing Course
const deleteCourse = async (req, res) => {
    try{
        const course = Course.findOneAndRemove({ _id: req.params.id});
        if (course === null){
            res.status(200).json(course);   // Entry found and deleted
        }else{
            res.status(204);                // Entry not found in database
        }
    } catch (error){
        res.status(409).json({ message: error.message})
    }
};

module.exports = { getCourses, addCourse, updateCourse, deleteCourse};