const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const courseRoutes = require('./routes/courses.js');
const userRoutes = require('./routes/users.js');

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/course', courseRoutes);
app.use('/user', userRoutes);

const CONNECTION_URL = "mongodb+srv://CS320TeamB:Qk7WzAm2U20DtopV@database.lu7pdvp.mongodb.net/?retryWrites=true&w=majority";
// const CONNECTION_URL = process.env.CONNECTION_URL1;




const PORT = process.env.PORT || 5000;

 mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
     .catch((error) => console.log(error.message));

