const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/';

const connecting = mongoose.connect(url,{dbName : "management"});


module.exports = connecting;

