const mongoose = require('mongoose')

const City = mongoose.model('City',{
    name : {
        type : String
    }
})

module.exports = City