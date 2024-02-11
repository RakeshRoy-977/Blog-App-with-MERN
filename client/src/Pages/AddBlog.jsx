import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: "",
    user: localStorage.getItem("userId"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const res = await axios.post(
        `http://localhost:3003/api/blog/create`,
        formData
      );
      console.log(res);
      if (res.data.msg === "success") {
        toast.success("Blog Added");
        setFormData({ ...formData, title: "", description: "", img: "" });
      } else {
        toast.error(res.data);
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      toast.error("An error occurred while adding the blog.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          name="title"
          id="title"
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          name="description"
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
        ></textarea>
        <input
          type="text"
          placeholder="Image URL"
          value={formData.img}
          name="img"
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Add
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddBlog;
