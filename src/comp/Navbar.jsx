import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AuthStatus } from "../Controller";
import logo from "../assets/img/logo.png";
import openMenu from "../assets/img/open_menu.png";
import closeMenu from "../assets/img/close_menu.png";
function Navbar(props) {
  // const configureAuth = useContext(AuthStatus);
  const logout = () => {
    // configureAuth();
  };
  let menu = useRef();
  // let proposals = "/user/proposals";
  // if (props.user.email === "jshivdas07@gmail.com") {
  //   proposals = "/user/admin_proposals";
  // }
  const open_menu = () => {
    menu.current.style.display = "block";
  };
  const close_menu = () => {
    menu.current.style.display = "none";
  };
  return (
    <header className="flex m-4 w-11/12 md:w-8/12 mx-auto">
      <div className="w-fit ">
        <img src={logo} alt="application logo" className="w-12 h-auto" />
        <p className="h-0.5 mt-1 w-6 bg-fuchsia-300 mx-auto rounded-lg"></p>
      </div>
      <div className="relative flex flex-col items-center flex-1">
        <button
          className="w-fit absolute top-1 right-0 ml-auto"
          onClick={open_menu}
        >
          <img
            src={openMenu}
            alt="open menu"
            className="w-8 h-auto mt-3 md:hidden"
          />
        </button>
        <div
          ref={menu}
          className="absolute flex flex-col top-1 right-0 w-6/12 border border-fuchsia-600 rounded-lg text-fjord bg-white md:border-none hidden md:block"
        >
          <button
            onClick={close_menu}
            className="w-fit bg-white absolute top-2 right-2"
          >
            <img
              src={closeMenu}
              alt="close menu"
              className="w-6 h-auto md:hidden"
            />
          </button>
          <div className="flex flex-col w-full md:flex-row justify-end">
            <NavLink
              to="/"
              className={({ isActive }) => {
                if (isActive) {
                  return "border-b-2 border-sky-500 mx-4 text-fjord";
                } else {
                  return "my-1 mx-4 text-fjord";
                }
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/proposal"
              className={({ isActive }) => {
                if (isActive) {
                  return "border-b-2 border-sky-500 mx-4 text-fjord";
                } else {
                  return "my-1 mx-4 text-fjord";
                }
              }}
            >
              Art's
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => {
                if (isActive) {
                  return "border-b-2 border-sky-500 mx-4 text-fjord";
                } else {
                  return "my-1 mx-4 text-fjord";
                }
              }}
            >
              Profile
            </NavLink>
            <button className="w-fit my-1 mx-2 px-4 text-left bg-sky-500 hover:bg-sky-600 text-white rounded-md">
              logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
