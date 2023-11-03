const {model , Schema} = require('mongoose');

const userSchema = new Schema({
    userName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        required : true,
    },
    company : {
        type : String,
        required : true,
    }
});

const user = model("User" , userSchema);

module.exports =  user ;