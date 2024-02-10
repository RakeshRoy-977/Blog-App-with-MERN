const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Titel is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  img: {
    type: String,
    required: [true, "img is required"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
});

const BlogModel = mongoose.model("Blog", BlogSchema);
module.exports = BlogModel;
