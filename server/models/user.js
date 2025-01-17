// imports
const mongoose = require("mongoose");
const { Schema } = mongoose;

// defined the schema for user model
const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

// mongoose model for the user scheme
const UserModel = mongoose.model("User", userSchema);

// export the user model
module.exports = UserModel;