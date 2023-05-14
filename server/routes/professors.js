const express = require('express');

const { getProfessors, getProf } = require('../controllers/professors.js');

const router = express.Router();

router.get('/', getProfessors);
router.get('/:id', getProf);

module.exports = router;
