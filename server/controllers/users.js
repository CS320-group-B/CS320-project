const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user.js');
const Enrollment = require('../models/enrollment.js');


// @desc get user by authentication token
const getUser = async(req,res) =>{
    try {
        const user = await User.findById(req.userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    
}
//@desc get all users, unsafe and only for testing
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users); 
    } catch (error){
        res.status(404).json({message: error.message}); 
    }

}

//@desc add a user
const addUser = async (req, res) => {
    const user = req.body;
    user.taken = [];
    const newUser = new User(user);
    try{
        await newUser.save();
        res.status(201).json(newCourse);

    } catch (error){
        res.status(409).json({message: error.message});
    }

}
// @desc    Update existing user
const updateUser = async (req, res) => { 
    try{
        let upd = req.body;
        if (upd.hasOwnProperty("taken")){delete upd.taken;}// use add/remove taken to update taken array

        const updatedUser = await User.findOneAndUpdate({"_id": req.userId}, upd, {new: true});
        if (!updatedUser){return res.status(404).json({ message: "User not found" });}
        res.status(200).json(updatedUser);
    } catch (error){
        res.status(404).json({ message: error.message})
    }
};
// @desc    Delete Existing User
const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndRemove({"_id": req.userId});
        if (!user) return res.status(204).json({ message: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
// @desc signin user with email and password
const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}
// @desc signup user with name, email, and password
const signup = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;        

    try {
        if (!name || !email || !password || !confirmPassword) return res.status(400).json({ message: "Please enter all fields." });

        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(409).json({ message: "User already exists." });

        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });

        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));

        const result = await User.create({ name, email, password: hashedPassword });

        const token = jwt.sign({ email: result.email, id: result._id}, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}
// @desc add a course from taken array in a User
const addTaken = async (req, res) => { 
    try{
        let updatedUser = await User.findOneAndUpdate({"_id": req.userId}, {$addToSet: {"taken": req.body.course_key}}, {new: true});
        if (!updatedUser){return res.status(404).json({ message: "User not found" });}
        res.status(200).json(updatedUser);
    } catch (error){
        res.status(404).json({ message: error.message})
    }
};
// @desc remove a course from taken array in a User
const removeTaken = async (req, res) => { 
    try{
        let updatedUser = await User.findOneAndUpdate({"_id": req.userId}, {$pull: {"taken":req.body.course_key}}, {new: true});
        if (!updatedUser){return res.status(404).json({ message: "User not found" });}
        res.status(200).json(updatedUser);
    } catch (error){
        res.status(404).json({ message: error.message})
    }
};
// @desc get taken courses for a user
const getTaken = async(req,res) =>{
    try {
        const user = await User.findById(req.userId);
        res.status(200).json(user.taken);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    
}
module.exports = {getUser, addUser, updateUser, deleteUser, signin, signup, addTaken, removeTaken, getTaken};