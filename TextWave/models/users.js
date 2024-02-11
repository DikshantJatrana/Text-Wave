const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Text-wave");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email is unique
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a User model from the user schema
const User = mongoose.model("User", userSchema);

module.exports = User;
