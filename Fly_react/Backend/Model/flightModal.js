const mongoose = require('mongoose');

const FligthSchmea = mongoose.Schema({
    place:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true

    }

})
module.exports = mongoose.model('Flights',FligthSchmea);