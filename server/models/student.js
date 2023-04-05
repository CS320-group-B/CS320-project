
import mongoose from 'mongoose';
import Course from './course.js'

const userSchema = mongoose.Schema({
    id: String,
    email: { 
        type: String, 
        required: true
    },
    password: { 
        type: String, 
        required: true
    },
    taken: [Course], 
    planned: [Course]
});

const User = mongoose.model('User', userSchema);

export default User;