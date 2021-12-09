const mongoose=require('mongoose');

var schema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: String
})


const Employeedb = mongoose.model('Employee', schema);

module.exports = Employeedb;