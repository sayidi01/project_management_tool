const express = require("express");

const projects = require("../models/projects");

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  projects
    .find()
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      console.log(err);
    });
});

projectsRouter.post("/", (req, res) => {
  projects
    .create({ ...req.body })
    .then((resp) => {
        res.status(201).send({message: "Project created successfuly"})
    })
    .catch((err) => {
        res.status(404).send({err})
    });
});

projectsRouter.put("/:id",(req,res) => {
    const projectsId = req.params.id
projects
.updateOne({ _id: projectsId }, req.body).then((data) => {
    res.send({data})
}).catch((err) => {
    res.status(403).send({err})
})  ; 
    
});


projectsRouter.delete("/:id", (req,res) => {
    const projectsId = req.params.id
    projects
    .deleteOne({ _id: projectsId }).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(404).send(err);
    })
})



module.exports = projectsRouter;
