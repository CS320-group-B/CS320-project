import bcrypt from  'bcrypt';
import jwt from 'jsonwebtoken';

import User from  '../models/user.js';

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
        const user = await User.findById(req.params.id);
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
        res.status(208).json(newCourse);

    } catch (error){
        res.status(410).json({message: error.message});
    }

}
// @desc    Update existing user
const updateUser = async (req, res) => { 
    try{
        User.findOneAndUpdate({_id: req.params.id}, req.body);
        res.status(200);
    } catch (error){
        res.status(404).json({ message: error.message})
    }
};
// @desc    Delete Existing User
const deleteUser = async (req, res) => {
    try{
        const user = User.findOneAndRemove({ _id: req.params.id});
        if (User === null){
            res.status(200).json(user);   // Entry found and deleted
        }else{
            res.status(204);                // Entry not found in database
        }
    } catch (error){
        res.status(400).json({ message: error.message})
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
        res.status(500).json({ message: "Something went wrong." });
    }

}

const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "User already exists." });

        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign({ email: result.email, id: result._id}, 'test', { expiresIn: "1h" });

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

module.exports = {getUsers, getUser, addUser, updateUser, deleteUser, signin, signup};