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


module.exports = {getUsers, addUser};