import React, { useState, useContext } from "react";
import axios from "axios";
import { db_connect } from "../Constants";
import "../assets/css/Auth/login.css";
import { AuthStatus } from "../Controller";
function Login(props) {
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
    <div className="auth_container" id="login">
      <h3 className="lable_">Login</h3>
      <label className="label" htmlFor="email">
        Email
      </label>
      <input
        className="input"
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label className="label" htmlFor="password">
        Password
      </label>
      <input
        className="input"
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />

      <p className="toggleText forgot" onClick={() => {props.changeComp("forgot_pass")}}>
        Forgot password?
      </p>
      <hr className="auth_hr" />
      <button className="btn" onClick={login_user}>
        Open
      </button>
      
      <p
        className="toggleText"
        onClick={() => {
          props.changeComp("signup");
        }}
      >
        Dont have an account? <i>signup</i>
      </p>
    </div>
  );
}

export default Login;
