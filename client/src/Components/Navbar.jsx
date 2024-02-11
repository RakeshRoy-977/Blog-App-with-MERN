import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../Redux/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const Nav = useNavigate();
  const handelLogout = () => {
    dispatch(authActions.logOut());
    localStorage.removeItem("userId");
    Nav(`/`);
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold">
          Blog App
        </Link>
        <div>
          {!isLoggedIn && (
            <>
              {" "}
              <Link
                to="/login"
                className="text-white px-4 py-2 mx-2 rounded hover:bg-gray-700"
              >
                Login
              </Link>
              <Link
                to="/signUp"
                className="text-white px-4 py-2 mx-2 rounded hover:bg-gray-700"
              >
                SignUp
              </Link>
            </>
          )}

          {isLoggedIn && (
            <>
              <Link
                to="/addBlog"
                className="text-white px-4 py-2 mx-2 rounded hover:bg-gray-700"
              >
                Add Blog
              </Link>

              <Link
                to="/myBlogs"
                className="text-white px-4 py-2 mx-2 rounded hover:bg-gray-700"
              >
                MyBlogs
              </Link>

              <button
                onClick={handelLogout}
                className="text-white px-4 py-2 mx-2 rounded hover:bg-gray-700"
              >
                LogOut
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
