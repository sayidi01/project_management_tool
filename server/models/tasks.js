const { model, Schema, Types } = require("mongoose");

const TasksSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  collaborators: [
    {
      type: Types.ObjectId,
      ref: "User"
    },
  ],
});

const Tasks = model("Tasks", TasksSchema);

module.exports = Tasks;
