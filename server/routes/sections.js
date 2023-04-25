const express = require('express');

const { getSections } = require('../controllers/sections.js');

const router = express.Router();

router.get('/', getSections);

module.exports = router;
