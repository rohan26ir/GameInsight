import React, { useContext } from "react";
import { FaHome, FaStarHalfAlt, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { CgPlayListAdd, CgProfile } from "react-icons/cg";
import { TfiUser } from "react-icons/tfi";
import { MdOutlineGamepad } from "react-icons/md";
import { PiGameControllerBold } from "react-icons/pi";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar top-0 px-5 bg-[#1C192E] text-red-600 fixed z-50">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
            >
              <li>
              <NavLink to={"/"}>
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/all-reviews"}>
                <FaStarHalfAlt /> All Reviews
              </NavLink>
            </li>
                <li>
                  <NavLink to={"/add-review"}>
                    <MdOutlineGamepad /> Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/my-reviews"}>
                    <TfiUser /> My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/myWatchlist"}>
                    <CgPlayListAdd /> Game WatchList
                  </NavLink>
                </li>
            </ul>
          </div>
          
          <div className="hidden md:block">
            <Link
            to="/"
            className="p-2 flex text-xl font-bold justify-center items-center"
          >
            <span className="mr-1 text-rose-600">
              <PiGameControllerBold />
            </span>{" "}
            <span className="text-orange-600">GameInsight</span>
          </Link>
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/all-reviews"}>
                <FaStarHalfAlt /> All Reviews
              </NavLink>
            </li>
                <li>
                  <NavLink to={"/add-review"}>
                    <MdOutlineGamepad /> Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/my-reviews"}>
                    <TfiUser /> My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/myWatchlist"}>
                    <CgPlayListAdd /> Game WatchList
                  </NavLink>
                </li>
          </ul>
        </div>

        

        {/* Navbar End */}
        <div className="navbar-end items-center gap-2 w-[100%]">

        <div>
          <DarkMode></DarkMode>
        </div>


          {user &&   <div className="tooltip tooltip-bottom tooltip-info" data-tip={user ? user.displayName : "User Name"}>
            
            <div>
              {user ? (
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt={user.displayName || "User"}
                />
              ) : (
                <FaUserCircle className="text-3xl" />
              )}
  
            </div>
  
            </div>}

          {/* {user && user.displayName && (
            <div className="text-white">{user.displayName}</div>
          )} */}

          {user ? (
            <button
              onClick={logOut}
              className="px-4 py-1 bg-red-600 hover:bg-rose-700 text-white font-semibold rounded-md"
            >
              Log Out
            </button>
          ) : (
            <Link to="/auth/login">
              <button className="px-2 py-1 bg-red-600 hover:bg-rose-800 text-white font-semibold rounded-md w-[110%] ">
                Log In
              </button>
            </Link>
          )}

          {!user && (<Link to="/auth/register">
              <button className="px-3 py-1 bg-red-600 hover:bg-rose-800 text-white font-semibold rounded-md">
                Register
              </button>
            </Link>)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;