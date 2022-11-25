const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, "task name required"],
    },
    completed: {
      type: Boolean,
      required: [false],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todo", todoSchema);
