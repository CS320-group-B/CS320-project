const User = require('');//whatever the modle looks like

//@desc get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(207).json(users); //not rly sure what status num should be\
    } catch (error){
        res.status(405).json({message: error.message}); //not sure about number
    }

}

//@desc get User
const getUser = async(req,res) =>{
    const user = req.body;
    
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
        Course.findOneAndUpdate({_id: req.params.id}, req.body);
        res.status(200);
    } catch (error){
        res.status(404).json({ message: error.message})
    }
};
// @desc    Delete Existing User
const deleteUser = async (req, res) => {
    try{
        const course = Course.findOneAndRemove({ _id: req.params.id});
        if (course === null){
            res.status(200).json(course);   // Entry found and deleted
        }else{
            res.status(204);                // Entry not found in database
        }
    } catch (error){
        res.status(400).json({ message: error.message})
    }
};

module.exports = {getUsers, addUser, updateUser, deleteUser};