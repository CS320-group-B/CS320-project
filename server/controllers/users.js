const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user.js');

//@desc get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users); 
    } catch (error){
        res.status(404).json({message: error.message}); 
    }

}

//@desc get User
const getUser = async(req,res) =>{
    try {
        if (req.params.id !== req.userId){return res.status(400).json("Id does not match token");}
        const user = await User.findById(req.userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    
}

//@desc add a user
const addUser = async (req, res) => {
    const user = req.body;
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
        if (req.params.id !== req.userId){return res.status(400).json("Id does not match token");}
        const updatedUser = await User.findOneAndUpdate({"_id": req.userId}, req.body, {new: true});
        if (!updatedUser){return res.status(404).json("User not found");}
        res.status(200).json(updatedUser);
    } catch (error){
        res.status(404).json({ message: error.message})
    }
};
// @desc    Delete Existing User
const deleteUser = async (req, res) => {
    try {
        if (req.params.id !== req.userId){return res.status(400).json("Id does not match token");}
        const user = await User.findOneAndRemove({"_id": req.userId});
        if (!user) return res.status(204).json({ message: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const signup = async (req, res) => {
    const { email, password, confirmPassword } = req.body;        

    try {
        if (!email || !password || !confirmPassword) return res.status(400).json({ message: "Please enter all fields." });

        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(409).json({ message: "User already exists." });

        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword });

        const token = jwt.sign({ email: result.email, id: result._id}, 'test', { expiresIn: "1h" });

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

module.exports = {getUser, addUser, updateUser, deleteUser, signin, signup};