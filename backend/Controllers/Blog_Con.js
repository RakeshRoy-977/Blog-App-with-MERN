const { default: mongoose } = require("mongoose");
const AuthModel = require("../Models/Auth_Model");
const BlogModel = require("../Models/Blog_Model");
const { json } = require("express");

const createBlog = async (req, res, next) => {
  try {
    const { title, description, img, user } = req.body;
    const CheckUser = await AuthModel.findById(user);
    if (!CheckUser) {
      return res.json(`User not found ! login to Create Blog`);
    }
    const newBlog = new BlogModel({
      title,
      description,
      img,
      user,
    });
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({ session });
    CheckUser.blogs.push(newBlog);
    await CheckUser.save({ session });
    await session.commitTransaction();

    return res.json({ newBlog });
  } catch (error) {
    return console.log({ error: error.message });
  }
};

const getAll = async (req, res, next) => {
  try {
    const blogs = await BlogModel.find({});
    if (blogs.length === 0) {
      return res.json(`Please Add Blogs to See`);
    }
    return res.json(blogs);
  } catch (error) {
    return console.log({ error: error.message });
  }
};
const getOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const blog = await BlogModel.findById(id);

    return res.json(blog);
  } catch (error) {
    return console.log({ error: error.message });
  }
};
const updateBlog = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, description, img } = req.body;
    const blog = await BlogModel.findByIdAndUpdate(
      id,
      { title, description, img },
      { new: true }
    );

    if (!blog) {
      return json();
    }
    res.json(blog);
  } catch (error) {
    return console.log({ error: error.message });
  }
};
const deleteBlog = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.json(`Blog Not Found !`);
    }
    const blog = await BlogModel.findByIdAndDelete(id).populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();

    return res.json(`Deleted`);
  } catch (error) {
    return console.log({ error: error.message });
  }
};

const UserBlogs = async (req, res, next) => {
  try {
    const id = req.params.id;
    const CheckUser = await AuthModel.findById(id).populate("blogs");
    if (!CheckUser) {
      return console.log(`User not Found !`);
    }
    res.json({ blogs: CheckUser });
  } catch (error) {
    return console.log({ error: error.message });
  }
};

module.exports = {
  createBlog,
  getAll,
  getOne,
  updateBlog,
  deleteBlog,
  UserBlogs,
};
