const express = require('express');
const auth = require('../middleware/auth.js');

const { addEnrollment, deleteEnrollment, getEnrollment, updateEnrollment } = require('../controllers/enrollment.js');

const router = express.Router();


router.post('/enroll', auth, addEnrollment);
router.get('/', auth, getEnrollment);
router.put('/', auth, updateEnrollment);
router.delete('/unenroll', auth, deleteEnrollment);

module.exports = router;