const jwt = require("jsonwebtoken");
const User = require("../models/Registration");

async function isAuthorized(req, res, next) {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "No Token Found" });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded.userId);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    const user = await User.findById(decoded.userId);
    // console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    // console.log("User found:", user);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { isAuthorized };
