const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 9000;
const cors = require("cors");
const User = require("./models/Registration");
const Teacher = require("./models/teacherLogin");
const News = require("./models/schoolUpdates");
require("dotenv").config();

// const updates = [
//   {
//     title: "Welcome to Madarsa Dua Eduational School",
//     description: "Welcome to Madarsa Dua Eduational School",
//     date: "2020-01-01",
//   },
// ];

//Database Connections

mongoose
  .connect("mongodb://localhost:27017/Madarsa_Dua_Educational_School")
  .then(() => {
    console.log("DB Connected");
  });

//MIddleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Post Requests for Student
app.post("/student/registration", async (req, res) => {
  try {
    const { Name, email, password, Phone } = req.body;
    const newUser = await User.create({ Name, email, password, Phone });
    console.log("New Registration Done", newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/student/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email, password: password });
    if (!user) {
      return res.status(404).json({ message: "No User Found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Post Requests for Teacher
app.post("/teacher/registration", async (req, res) => {
  try {
    const { Name, email, password, phone } = req.body;
    const newTeacher = await Teacher.create({ Name, email, password, phone });
    console.log("New Registration Done", newTeacher);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/teacher/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const teacher = await Teacher.findOne({ email: email, password: password });
    if (!teacher) {
      return res.status(404).json({ message: "No User Found" });
    }
    res.status(200).json(teacher);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Post Request for Updates

app.post("/school/updates", async (req, res) => {
  try {
    const { title, news } = req.body;
    const newNews = await News.create({ title, news });
    console.log("New Updates Done", newNews);
    // updates.push(newNews);
    res.status(201).json(newNews);
  } catch (error) {
    console.error("Error creating school updates:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
//getNews from Databases
app.get("/get/news", async (req, res) => {
  const news = await News.find();
  res.status(200).json(news);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
