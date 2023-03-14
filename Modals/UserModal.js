const mongoose = require('mongoose')
//const {Schema} = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {type:String,
    required:true},
    age:Number,
    email:{type:String,
    required:true,
    unique:true,
    match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,'Plaese put a valid email']},

    password:String,
})
module.exports = mongoose.model('user',UserSchema)