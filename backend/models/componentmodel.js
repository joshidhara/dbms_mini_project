const mongoose = require('mongoose')


const componenttemplate= new mongoose.Schema({
    componentname:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    diameter:{
        type:String,
        
    },
    thickness:{
        type:String,
        
    },
    quantity:{
        type:Number,
        
    },
    power:{
        type:String,
        
    },
    length:{
        type:String,
        
    },
})
module.exports = mongoose.model('componenttable',componenttemplate)