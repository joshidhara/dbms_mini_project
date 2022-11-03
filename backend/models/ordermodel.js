const mongoose = require('mongoose')

const ordertemplate = new mongoose.Schema({
    orderNo:{
        type: String,
        required: true
    },
    orderDate:{
        type: Date,
        
    },
    arrivalTime:{
        type: Date,
        
    },
    cost:{
        type: String,
        
    },
    username:{
        type: String,
        
    },
    


})
module.exports = mongoose.model('ordertable',ordertemplate)