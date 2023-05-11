if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require("cors");
const courses = require("./models/courses")
const User = require("./models/users")
app.use(express.json());
app.use(cors());

//mongoDB code
const mongoose = require('mongoose')
const DATABASE_URL =  "mongodb+srv://admin:5zaVgCQFkqlJW3Z1@cluster0.sbua2r4.mongodb.net/public?retryWrites=true&w=majority"

mongoose.connect(DATABASE_URL, { useNewUrlParser: true})

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.get("/getCourses", (req, res) => {
    courses.CourseCollection.find({}, (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      })
  });
  app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
  
    res.json(user);
  });
  

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))