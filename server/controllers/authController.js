// imports
const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");

// test endpoint handler
const test = (req, res) => {
  res.json("test is working");
};

const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check if name was entered
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    // check if password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "Password must be at least 6 characters long.",
      });
    }
    // check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email already exists",
      });
    }

    const hashedPassword = await hashPassword(password);

    // create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
};

// exports
module.exports = {
  test,
  signupUser,
};
