const express = require('express');
const tasks = require('../models/tasks')

const tasksRouter = express.Router();

tasksRouter.get('/',(req,res) => {
    tasks
    .find()
    .then((data) => {
        res.send({data})
    })
    .catch((err) => {
        console.log(err)
    }) 
});


tasksRouter.post('/',(req,res) => {
    tasks
    .create({ ...req.body })
    .then((res) => {
        res.status(201).send({message: "tasks created successfuly"})
    })
    .catch((err) => {
        res.status(404).send({err})
    });

});

tasksRouter.put("/:id",(req,res) => {
    const TasksId = req.params.id
tasks
.updateOne({ _id: TasksId }, req.body).then((data) => {
    res.send({data})
}).catch((err) => {
    res.status(407).send({err})
})  
    
});


tasksRouter.delete("/:id", (req,res) => {
    const tasksId = req.params.id
    tasks
    .deleteOne({ _id: tasksId }).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(403).send(err);
    })
})












module.exports = tasksRouter;