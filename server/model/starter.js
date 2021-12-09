const mongoose=require('mongoose');

var schema=new mongoose.Schema({
    picture_url: {
        type: String,
        
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
    
})


const Starterdb = mongoose.model('Starter', schema);

module.exports = Starterdb;