import express from 'express';
import { getCourses, getCourse, addCourse, updateCourse, deleteCourse } from '../controllers/courses';

const router = express.Router();

router.get('/', getCourses);
router.get('/:id', getCourse);
router.post('/', addCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;