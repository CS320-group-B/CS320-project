const mongoose = require('mongoose');

const professorSchema = mongoose.Schema({

});

const Professor = mongoose.model('Professor', professorSchema)

module.exports = { Professor, professorSchema };
