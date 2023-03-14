const User = require('../Modals/UserModal')


//add new user 
//@POST

const AddedUSer = async(req,res)=>{
   try {
        //metode 1 
    //const newUser = await User.create(req.body)
    //res.json(newUser)
    //MEtode 2 
    const NEwUser = new User(req.body)
    const addedUser = await NEwUser.save()
    res.json(addedUser)
    } catch (error) {
        console.log(error);
    }
}

//GET User 
//@GET
const GetDataUSers = async(req,res)=>{
    try{
    const users = await User.find({})
    res.json(users)
} catch (error) {
    console.log(error)
}
}

//update user 
//PUT
const UpdateUsers = async(req,res)=>{
    try {
        const UpdateUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
res.json(UpdateUser)
    } catch (error) {
        console.log(error)
    }
}

//DELETE user
//@DELETE
const DeleteUsers = async(req,res)=>{
    try {
     const DeletedUser = await User.findByIdAndDelete(req.params.id)
     res.json({msg:'The user is deleted',DeletedUser})
    } catch (error) {
     console.log(error)
    }
 
 }

 module.exports = {AddedUSer,GetDataUSers,UpdateUsers,DeleteUsers}