import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const Nav = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:3003/api/blog/get");
        if (res.data) {
          setData(res.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {data.length > 0 ? (
          data.map((post) => (
            <div
              key={post._id}
              onClick={() => Nav(`/blog/${post._id}`)}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
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
            </div>
          ))
        ) : (
          <p>No blog posts found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
