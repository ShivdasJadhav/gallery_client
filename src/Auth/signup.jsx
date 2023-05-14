import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/signup.css";
function Signup() {
  let [data, setData] = useState({ name: "", email: "", password: "" });
  let navigate = useNavigate();
  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const add_user = async () => {
    await axios
      .post("https://gallary-server.vercel.app/auth/signup", {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then((msg) => {
        if (msg.data.status === 1) {
          alert("signup successfully! kindly login.");
          navigate("/");
          return;
        } else if (msg.data.status === 2) {
          alert("user already Registered with this Email!");
        } else {
          alert("Failed to Signup");
        }
      });
  };
  return (
    <div id="signup" className="">
      <div className="w-9/12 md:w-3/12 mx-auto text-left mt-48 border-2 text-white p-8 h-hit rounded-lg">
        <label htmlFor="name" className="text-xl font-semibold my-2 block">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handlechange}
          className="text-gray-800 bg-white focus:outeline-red-400 w-full block px-3 rounded-md h-10"
        />
        <label htmlFor="email" className="text-xl font-semibold my-2 block">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handlechange}
          className="text-gray-800 bg-white focus:outeline-red-400 w-full block px-3 rounded-md h-10"
        />

        <label htmlFor="password" className="text-xl font-semibold my-2 block">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={handlechange}
          className="text-gray-800 bg-white focus:outeline-red-400 w-full block px-3 rounded-md h-10"
        />
        <button
          onClick={add_user}
          className="text-center w-fit my-4 px-8 py-2 rounded-md mx-auto bg-red-500 hover:bg-red-600 text-white font-semibold"
        >
          signup
        </button>
        <p
          onClick={() => {
            navigate("/");
          }}
          className="hover:cursor-pointer underline underline-offset-4 text-right"
        >
          Alredy have an account? <i className="text-red-300">login</i>
        </p>
      </div>
    </div>
  );
}
export default Signup;
