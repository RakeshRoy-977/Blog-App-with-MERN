import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { useSelector } from "react-redux";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/myBlogs/" element={<Home />} />
        <Route path="/myBlogs/:id" element={<Home />} />
        <Route path="/blogs/add" element={<Home />} />
        <Route path="/blogs/update" element={<Home />} />
        <Route path="/blogs/delete" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
