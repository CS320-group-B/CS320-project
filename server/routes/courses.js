const express = require('express');
const router = express.Router();
const { getCourses, getCourse, addCourse, updateCourse, deleteCourse, rankCourse } = require('../controllers/courses');


router.get('/', getCourses);
router.get('/:id', getCourse);
router.post('/rank', rankCourse);
router.post('/', addCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;