import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import "react-toastify/dist/ReactToastify.css";
import MyBlogs from "./Pages/MyBlogs";
import AddBlog from "./Pages/AddBlog";
import BLogsDetails from "./Pages/BLogsDetails";
import { authActions } from "./Redux/store";
const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {isLoggedIn ? (
          <>
            <Route path="/myBlogs" element={<MyBlogs />} />
            <Route path="/blog/:id" element={<BLogsDetails />} />
            <Route path="/addBlog" element={<AddBlog />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
