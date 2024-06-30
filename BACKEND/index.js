const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 9000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const User = require("./models/Registration");
// const Teacher = require("./models/teacherLogin");
const News = require("./models/schoolUpdates");
const bcrypt = require("bcrypt");
const { sendToken } = require("./utils/jwtToken");
const { isAuthorized } = require("./middleware/auth");

require("dotenv").config();

// const updates = [
//   {
//     title: "Welcome to Madarsa Dua Eduational School",
//     description: "Welcome to Madarsa Dua Eduational School",
//     date: "2020-01-01",
//   },
// ];

//Database Connections

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("DB Connected");
});

//MIddleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Post Requests for Student
app.post("/registration", async (req, res) => {
  try {
    const { Name, email, password, Phone } = req.body;
    const salt = await bcrypt.genSalt(10);
    hashedpassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      Name,
      email,
      password: hashedpassword,
      Phone,
    });

    await sendToken(newUser, process.env.JWT_SECRET, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Please provide all fields" });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "No user Found" });
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      res.status(400).json({ message: "Invalid Password" });
    }
    sendToken(user, process.env.JWT_SECRET, res);

    // const user = await User.findOne({ email: email, password: password });
    // if (!user) {
    //   return res.status(404).json({ message: "No User Found" });
    // }
    // res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Post Requests for Teacher
// app.post("/teacher/registration", async (req, res) => {
//   try {
//     const { Name, email, password, phone } = req.body;
//     const newTeacher = await Teacher.create({ Name, email, password, phone });
//     console.log("New Registration Done", newTeacher);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// app.post("/teacher/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const teacher = await Teacher.findOne({ email: email, password: password });
//     if (!teacher) {
//       return res.status(404).json({ message: "No User Found" });
//     }
//     res.status(200).json(teacher);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

//Post Request for Updates

app.post("/school/updates", isAuthorized, async (req, res) => {
  const user = req.user;
  if (user.role == "student") {
    return res.status(400).json({ message: "Not allowed to Post" });
  }
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
app.get("/get/news", isAuthorized, async (req, res) => {
  // const { role } = req.user;
  // if (role !== "student") {
  //   return res.status(400).json({
  //     message: "Student Not Allowed",
  //   });
  // }
  const news = await News.find();
  res.status(200).json(news);
});
app.get("/logout", async (req, res) => {
  res
    .status(201)
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "logout Successfully",
    });
});
async function getUser(req, res) {
  // const { token } = req.cookies;
  // const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  // const user = await User.findById(decoded.id);
  // console.log(user);
  const user = req.user;
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    user,
  });
}

app.get("/check", isAuthorized, getUser);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
