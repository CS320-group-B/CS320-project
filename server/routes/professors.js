const express = require('express');

const { getProfessors } = require('../controllers/professors.js');

const router = express.Router();

router.get('/', getProfessors);

module.exports = router;
