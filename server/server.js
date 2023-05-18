if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
//creating express app
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.set('layout', 'layouts/layout')
app.use(expressLayouts)
//setting respective routes
app.use(express.static('public'))
const indexRouter = require('./routes/index')
const courseRoutes = require('./routes/courses.js');
const userRoutes = require('./routes/users.js');

app.use('/', indexRouter)
app.use('/course', courseRoutes);
app.use('/user', userRoutes);

//connecting to MongoDB database
const mongoose = require('mongoose')
const DATABASE_URL =  "mongodb+srv://user:123@cluster0.7sb85e6.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DATABASE_URL, { useNewUrlParser: true})
//error checking for MongoDB connection
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))
//setting port to listen on
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
