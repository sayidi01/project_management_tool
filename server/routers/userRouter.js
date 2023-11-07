const express = require('express');

const {User} = require('../models/users.js');

const userRouter = express.Router();

userRouter.get('/',(req,res) => {
    User.find().then((data) => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    })
})







module.exports = userRouter;
