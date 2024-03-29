const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { genSalt } = require("bcryptjs");
const studentSchema = new mongoose.Schema({
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

studentSchema.pre("save", async () => {
  const salt = await genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  console.log(this.password);
});
const User = new mongoose.model("User", studentSchema);
module.exports = User;
