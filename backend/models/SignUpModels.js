const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    role:{
        type:String,
        default:'User'
    },
    name:{
        type:String,
        required:true
    },
 
    email:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now //everytime there's sign up the date is saved at backend
    }

})

module.exports = mongoose.model('usertable',signUpTemplate)
