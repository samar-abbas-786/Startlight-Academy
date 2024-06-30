const jwt = require("jsonwebtoken");

function sendToken(user, secret, res) {
  const token = jwt.sign({ userId: user._id }, secret);
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    maxAge: 3600000,
  });
  res.status(200);
  res.json({ message: "Registration successful", user, token });
}

module.exports = { sendToken };
