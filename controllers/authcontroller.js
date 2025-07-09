const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) return res.status(401).send("All field required");

    const user = await User.find({ email });

    if (!user) return res.status(401).send("Invalid credentials");

    const validpass = bcrypt.compare(password, user.password);
    if (!validpass) return res.status(401).send("Invalid credentials");
    const token = jwt.sign({ user_id: user.user_id }, SECRET_KEY, {
        expiresIn: "7d",
    });
    cookieParse('token':token);
    
    res.status(201).json({
      token: token,
      message: "User logged in successfully",
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("error while loggin", error.message);
    res.status(500).send("nhi hua login to ");
  }
};

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!email || !password || !username) return res.status(401).send("All field required");

    const hasspassword = bcrypt.hash(password,10);
    const newUser = new User({
        username,email,password:hasspassword
    })

    await newUser.save();

    res.status(201).json({
        message:"User register successfully"
    })
  } catch (error) {
    console.log("error while loggin", error.message);
    res.status(500).send("nhi hua login to ");
  }
};
