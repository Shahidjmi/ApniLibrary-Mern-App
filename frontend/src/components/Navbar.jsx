import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useContext } from "react";
import myContext from "../contextApi/context";
import Logout from "./Logout";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const {authUser, setAuthUser} = useContext(myContext);
 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const List = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/courses">Course</Link>
      </li>
      <li>
        <Link to="/contactus">Contact</Link>
      </li>
      <li>
        <Link to="/aboutus">About</Link>
      </li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container m-auto md:px-20 px-4 z-50 fixed top-0 left-0 right-0 ${
        sticky
          ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {List}
            </ul>
          </div>
          <a className=" text-2xl font-bold cursor-pointer">ApniLibrary</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{List}</ul>
            <label className="input flex items-center gap-2 mr-5">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            
          </div>
          {authUser ? <Logout/>:
          <div>
          <a onClick={()=>{document.getElementById("my_modal_3").showModal()}} className="btn bg-black text-white hover:bg-blue-500 hover:text-black duration-300">Login
          </a>
            <Login/>
          </div>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
