const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    // user:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required: false,
    //     default:null,
    //     ref: 'User',
    // },
    name:{
        type:String,
        required:[true,'Please insert your name']
    },
    email:{
        type:String,
        required:[true,'Please enter your email'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Please enter your password'],
    }
})


module.exports = mongoose.model('User', userSchema);