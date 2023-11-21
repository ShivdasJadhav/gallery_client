import React, { useState, useContext } from "react";
import axios from "axios";
import { db_connect } from "../Constants";
import { AuthStatus } from "../Controller";
import logo from "../assets/img/logo.png";
function Signin(props) {
  let [email, setEmail] = useState("");
  let [password, setPass] = useState("");
  const configureAuth = useContext(AuthStatus);
  const login_user = async () => {
    if (email === "" || password === "") {
      return;
    }
    await axios
      .post(`${db_connect}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.data.status === 1) {
          configureAuth(res.data.user._doc);
        } else if (res.data.status === 2) {
          alert("User does not Exists...\n Please Signup to Proceed!");
        } else {
          alert("Invalid credentials!");
        }
      });
  };
  return (
    <div
      className="w-11/12 mx-auto flex flex-col items-center py-8 "
      id="signin"
    >
      <img className="w-20 h-auto mx-auto" src={logo} alt="organization logo" />
      <h3 className="border border-fuchsia-400 text-allura text-xl text-fuchsia-900 text-center w-fit px-8 rounded-xl mx-auto my-2">
        SignIn for your Exhibits
      </h3>
      <a href="#signup" className="mx-auto text-sky-600 text-xs underline">
        Don't have a account? <i className="text-sx text-sky-600">SignUp</i>
      </a>
      <div className="flex flex-col items-center mt-16 border border-fuchsia-400 border-2 rounded-xl w-11/12 py-8 px-4">
       
        <label className="block w-11/12 text-fjord_one text-md" htmlFor="email">
          Email
        </label>
        <input
          className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:none outline-none"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="flex justify-between w-11/12 mt-6 items-end">
          <label className="block text-fjord_one text-md" htmlFor="password">
            Password
          </label>
          <a href="#forgot" className="text-sky-500 text-xs underline">Forgot Password?</a>
        </div>
        <input
          className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:none outline-none"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <div className="w-1/4 h-1 bg-fuchsia-400 my-4 rounded-md"></div>
        <button className="w-11/12 text-white bg-sky-600 p-2 rounded-md text-fjord_one text-sm">Signin</button>
      </div>
    </div>
  );
}

export default Signin;
