const express = require("express");
const {
  createBlog,
  getAll,
  getOne,
  deleteBlog,
  updateBlog,
  UserBlogs,
} = require("../Controllers/Blog_Con");

const route = express.Router();

//add
route.post(`/create`, createBlog);
//get all
route.get(`/get`, getAll);
//get single
route.get(`/get/:id`, getOne);
//update
route.patch(`/update/:id`, updateBlog);
//delete
route.delete(`/delete/:id`, deleteBlog);
//userBLogs
route.get(`/user/:id`, UserBlogs);

module.exports = route;
