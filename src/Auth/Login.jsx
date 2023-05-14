import React, { useState } from "react";
import "../assets/css/login.css";
// import "../assets/css/output.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  let [email, setEmail] = useState();
  let [password, setPass] = useState();
  let navigate = useNavigate();
  const login_user = async () => {
    await axios
      .post("https://gallary-server.vercel.app/auth/login", {
        email,
        password,
      })
      .then((msg) => {
        if (msg.data.status === 1) {
          localStorage.setItem("authentic",email)
          navigate("/user/home");
        } else if(msg.data.status===2) {
          alert("User does not Exists...\n Please Signup to Proceed!");
        }else{
          alert("Invalid credentials!");

        }
      });
  };
  return (
    <div id="login" className="">
      <div className="w-9/12 md:w-3/12 mx-auto text-left mt-48 border-2 text-white p-8 h-hit rounded-lg">
        <label htmlFor="email" className="text-xl font-semibold my-2 block">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="text-gray-800 bg-white focus:outeline-red-400 px-3 w-full block rounded-md h-10"
        />
        <label htmlFor="password" className="text-xl font-semibold my-2 block">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPass(e.target.value);
          }}
          className="text-gray-800 bg-white focus:outeline-red-400 px-3 w-full block rounded-md h-10"
        />
        <button
          onClick={login_user}
          className="text-center w-fit my-4 px-8 py-2 rounded-md mx-auto bg-red-500 hover:bg-red-600 text-white font-semibold"
        >
          login
        </button>
        <p
          onClick={() => {
            navigate("/signup");
          }}
          className="hover:cursor-pointer underline underline-offset-4 text-right"
        >
          dont have an account? <i className="text-red-300">signup</i>
        </p>
      </div>
    </div>
  );
}

export default Login;
