const mongoose=require('mongoose');

var schema=new mongoose.Schema({
    table_number: {
        type: String,
        required: true
    },
    table_capacity: {
        type: Number,
        required: true
    }
    
})


const Tabledb = mongoose.model('Table', schema);

module.exports = Tabledb;