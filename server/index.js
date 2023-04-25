const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const courseRoutes = require('./routes/courses.js');
const userRoutes = require('./routes/users.js');
const professorRoutes = require('./routes/professors.js');
const sectionRoutes = require('./routes/sections.js');
const enrollmentRoutes = require('./routes/enrollment.js');


const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/course', courseRoutes);
app.use('/user', userRoutes);
app.use('/professor', professorRoutes);
app.use('/section', sectionRoutes);
app.use('/enrollment', enrollmentRoutes);


//const CONNECTION_URL = "mongodb+srv://user:123@cluster0.7sb85e6.mongodb.net/?retryWrites=true&w=majority";
const CONNECTION_URL = "mongodb+srv://user:123@cluster0.7sb85e6.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

 mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
     .catch((error) => console.log(error.message));

