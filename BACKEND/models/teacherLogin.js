const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Teacher = new mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
