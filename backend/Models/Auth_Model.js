const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
});

const AuthModel = mongoose.model("Auth", authSchema);

module.exports = AuthModel;
