import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const MyBlogs = () => {
  const [data, setData] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3003/api/blog/user/${userId}`
        );
        console.log(res);
        if (res.data) {
          setData(res.data.blogs);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [data]);

  const handelDelete = async (id) => {
    const res = await axios.delete(
      `http://localhost:3003/api/blog/delete/${id}`
    );
    if (res.data === `Deleted`) {
      toast.success("Blog Deleted");
    }
  };
  return (
    <div className="container mx-auto px-4 ">
      <h1 className="text-3xl font-bold my-4">Your Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((post) => (
          <div
            key={post._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden "
          >
            <img
              className="w-full h-48 object-cover object-center"
              src={post.img}
              alt={post.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
            </div>
            <div className="flex justify-center space-x-10 p-4">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                onClick={() => handelDelete(post._id)}
              >
                Delete
              </button>
              <Link
                to={`/update/${post._id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Update
              </Link>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyBlogs;
