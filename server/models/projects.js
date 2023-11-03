const {model , Schema, Types} = require('mongoose');


const projectsSchema = new Schema ({
    title : {
        type : String,
        required : true,
    },
    adminId : {
        type : Types.ObjectId,
        required : true ,
        ref : "User", 
    },
    collaborators :[ {
        type : Types.ObjectId,
        ref : "User",

    }],
    tasks : [
        {
            type : Types.ObjectId,
            ref : "Tasks",
        }
    ]

})




const projects = model("projects",projectsSchema);

module.exports = projects;