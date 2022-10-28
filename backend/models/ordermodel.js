const mongoose = require('mongoose')

const ordertemplate = new mongoose.Schema({
    orderNo:{
        type: String,
        required: true
    },
    orderDate:{
        type: String,
        
    },
    arrivalTime:{
        type: String,
        
    },
    cost:{
        type: String,
        
    },
    username:{
        type: String,
        
    },
    


})
module.exports = mongoose.model('ordertable',ordertemplate)