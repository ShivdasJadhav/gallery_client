import React, { useContext, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthStatus } from "../Controller";
import logo from "../assets/img/logo.png";
import openMenu from "../assets/img/open_menu.png";
import closeMenu from "../assets/img/close_menu.png";
function Navbar(props) {
  const configureAuth = useContext(AuthStatus);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("utkn");
    configureAuth(false);
    navigate("/");
  };
  let menu = useRef();

  const open_menu = () => {
    menu.current.style.display = "block";
  };
  const close_menu = () => {
    menu.current.style.display = "none";
  };
  return (
    <header className="flex m-4 z-10 md:z-0 w-11/12 md:w-10/12 mx-auto">
      <div className="w-fit ">
        {props.user.isAdmin ? (
          <NavLink to={"/dashboard"}>
            <img src={logo} alt="application logo" className="w-12 h-auto" />
          </NavLink>
        ) : (
          <img src={logo} alt="application logo" className="w-12 h-auto" />
        )}
        <p className="h-0.5 mt-1 w-6 bg-fuchsia-300 mx-auto rounded-lg"></p>
      </div>
      <div className="relative flex flex-col items-center flex-1">
        <button
          className="w-fit absolute top-1 right-0 md:hidden ml-auto"
          onClick={open_menu}
        >
          <img src={openMenu} alt="open menu" className="w-8 h-auto mt-3" />
        </button>
        <div
          ref={menu}
          className="absolute py-6 md:py-2 px-2 z-10 md:z-0 flex flex-col top-1 right-0 w-6/12 border border-fuchsia-600 rounded-lg text-fjord bg-white md:border-none hidden"
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
          {/* for mobile */}
          <div className="flex flex-col w-full md:hidden items-start">
            <NavLink
              to="/"
              className={({ isActive }) => {
                if (isActive) {
                  return "border-b-2 md:border-r-1 rounded-md border-sky-500 mx-2 px-2 text-fjord w-11/12 md:w-fit";
                } else {
                  return "my-1 mx-4 text-fjord w-11/12 md:w-fit";
                }
              }}
              onClick={close_menu}
            >
              Home
            </NavLink>
            <NavLink
              to="/proposal"
              className={({ isActive }) => {
                if (isActive) {
                  return "border-b-2 md:border-r-1 rounded-md border-sky-500 mx-2 px-2 text-fjord w-11/12 md:w-fit";
                } else {
                  return "my-1 mx-4 text-fjord w-11/12 md:w-fit";
                }
              }}
              onClick={close_menu}
            >
              Art's
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => {
                if (isActive) {
                  return "border-b-2 md:border-r-1 rounded-md border-sky-500 mx-2 px-2 text-fjord w-11/12 md:w-fit";
                } else {
                  return "my-1 mx-4 text-fjord w-11/12 md:w-fit";
                }
              }}
              onClick={close_menu}
            >
              Profile
            </NavLink>
            <div className="h-1 w-12 bg-fuchsia-400 my-1 rounded-md mx-auto md:hidden"></div>
            <button
              type="button"
              onClick={logout}
              className="w-11/12 text-center h-8 md:h-auto md:py-1 md:w-fit my-1 mx-2 px-4 text-left bg-sky-500 hover:bg-sky-600 text-white rounded-md"
            >
              logout
            </button>
          </div>
        </div>
        {/* for desktop */}
        <div
          className="absolute py-2 px-2 z-0 flex flex-col top-1 right-0 w-6/12 border border-fuchsia-600 rounded-lg text-fjord bg-white border-none hidden md:block"
        >
          <div className="flex flex-nowrap w-full items-start justify-end">
            <NavLink
              to="/"
              className={({ isActive }) => {
                if (isActive) {
                  return "border-b-2 md:border-r-1 rounded-md border-sky-500 mx-2 px-2 text-fjord w-11/12 md:w-fit";
                } else {
                  return "my-1 mx-4 text-fjord w-11/12 md:w-fit";
                }
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/proposal"
              className={({ isActive }) => {
                if (isActive) {
                  return "border-b-2 md:border-r-1 rounded-md border-sky-500 mx-2 px-2 text-fjord w-11/12 md:w-fit";
                } else {
                  return "my-1 mx-4 text-fjord w-11/12 md:w-fit";
                }
              }}
            >
              Art's
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => {
                if (isActive) {
                  return "border-b-2 md:border-r-1 rounded-md border-sky-500 mx-2 px-2 text-fjord w-11/12 md:w-fit";
                } else {
                  return "my-1 mx-4 text-fjord w-11/12 md:w-fit";
                }
              }}
            >
              Profile
            </NavLink>
            <button
              type="button"
              onClick={logout}
              className="w-11/12 text-center h-8 md:h-auto md:py-1 md:w-fit my-1 mx-2 px-4 text-left bg-sky-500 hover:bg-sky-600 text-white rounded-md"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
