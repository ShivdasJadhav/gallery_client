import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthStatus } from "../Controller";
function Navbar(props) {
  const configureAuth = useContext(AuthStatus);
  const logout = () => {
    configureAuth();
  };
  let proposals = "/user/proposals";
  if (props.user.email === "jshivdas07@gmail.com") {
    proposals = "/user/admin_proposals";
  }
  return (
    <div id="navbar">
      <header className="text-gray-600 bg_transperant_black body-font bg-yellow-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              src="https://th.bing.com/th/id/OIP.bSan1CulbaOhZCrhySoiBgHaEu?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
            />
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            <span className="ml-3 text-xl">Art Gallary</span>
          </a>
          <nav className="md:ml-auto  flex flex-wrap items-center underline-offset-4 text-base justify-right">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : "#e2e8f0",
                textDecoration: isActive ? "underline" : "none",
              })}
              className="mr-5 hover:text-gray-900"
              to="/user/home"
            >
              Home
            </NavLink>{" "}
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : "#e2e8f0",
                textDecoration: isActive ? "underline" : "none",
              })}
              className="mr-5 hover:text-gray-900"
              to={proposals}
            >
              Proposals
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : "#e2e8f0",
                textDecoration: isActive ? "underline" : "none",
              })}
              className="mr-5 hover:text-gray-900"
              to="/user/profile"
            >
              Profile
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : "#e2e8f0",
                textDecoration: isActive ? "underline" : "none",
              })}
              className="mr-5 hover:text-gray-900"
              to="/user/about"
            >
              About
            </NavLink>
          </nav>
          <button
            onClick={logout}
            className="inline-flex items-center bg-orange-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-900 rounded text-white text-semibold mt-4 md:mt-0"
          >
            Log out
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
