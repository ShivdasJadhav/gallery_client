import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db_connect, custom_toast } from "../Constants";
function Footer() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const subscribe = async () => {
    if (user.email === "" || user.email === " ") {
      custom_toast("User Email is Required!", "warning", "⚠️");
      return;
    }
    if (user.firstName === "" || user.firstName === " ") {
      custom_toast("User's First Name is Required!", "warning", "⚠️");
      return;
    }
    await axios
      .post(`${db_connect}/mail/subscribe`, {
        sendTo: user.email,
        name: user.firstName + " " + user.lastName,
      })
      .then((res) => {
        if (res.status === 201) {
          custom_toast(
            "Your are subscribed to us from now on",
            "success",
            "📬"
          );
          return;
        }
        if (res.status === 208) {
          custom_toast("Your have already subscribed to us", "warning", "✅");
          return;
        } else {
          custom_toast("Failed to get subscribed", "alert", "❌");
        }
      });
  };
  return (
    <>
      <div
        id="footer"
        className="flex z-10 flex-col bg-black text-fjord_one py-8 px-4 mx-auto md:flex-row justify-center md:py-20"
      >
        <div className="sm:w-6/12 mx-8">
          <h2 className="text-white text-xl md:text-2xl">
            Do not miss any update
            <br /> Subscribe to the Newsletter
          </h2>
          <div className="w-full  flex flex-col my-2">
            <div className="flex h-20 md:h-fit flex-col md:flex-row">
              <input
                className="text-fuchsia-600 my-1 h-10 md:h-8  bg-white md:mr-2 px-2 text-xs flex-1 border-none outline-none rounded-md placeholder-fuchsia-300"
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                placeholder="First name"
              />
              <input
                className="text-fuchsia-600 my-1 h-10 md:h-8  bg-white px-2 text-xs flex-1 border-none outline-none rounded-md placeholder-fuchsia-300"
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                placeholder="Last name"
              />
            </div>
            <div className="w-full h-8 bg-white my-2 rounded-md flex justify-between">
              <input
                className="text-fuchsia-600 px-2 text-xs flex-1 border-none outline-none rounded-md placeholder-fuchsia-300"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="your@email.com |"
              />
              <button
                type="button"
                onClick={() => subscribe()}
                className="px-4 md:px-8 border border-white rounded-md bg-sky-500 text-white text-xs hover:bg-sky-600"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-4/12 mx-8 text-white pt-8 md:pt-0 md:pl-20">
          <h4 className="text-xl mb-4 md:mb-2 text-white">Sitemap</h4>
          <ul className="ml-2 md:ml-0">
            <li key="login">
              <Link className="text-sm text-white" to="login">
                Login
              </Link>
            </li>
            <li key="register">
              <Link className="text-sm text-white" to="register">
                Register
              </Link>
            </li>
            <li key="exhibits">
              <a className="text-sm text-white" href="/#top_arts">
                Exhibits
              </a>
            </li>
            <li key="community">
              <a className="text-sm text-white" href="/#community">
                Community
              </a>
            </li>
            <li key="review">
              <a className="text-sm text-white" href="/#review">
                Review
              </a>
            </li>
            <li key="about">
              <a className="text-sm text-white" href="/#about">
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="cp_rights" className="bg-neutral-700 h-10 flex items-center">
        <p className="text-xs text-white w-fit mx-auto italic text-fjord_one">
          All copyrights reserved by @2024 https://artexhibits.netlify.app
        </p>
      </div>
    </>
  );
}
export default Footer;