import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
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
                to="/blogs"
                className="text-white px-4 py-2 mx-2 rounded hover:bg-gray-700"
              >
                MyBlogs
              </Link>

              <Link
                to="/auth"
                className="text-white px-4 py-2 mx-2 rounded hover:bg-gray-700"
              >
                LogOut
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
