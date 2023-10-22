import React, { useState } from "react";
import axios from "axios";
import "../assets/css/Auth/signup.css";
import { db_connect } from "../Constants";
import { countries } from "./country";
function Signup(props) {
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    c_pass: "",
    use_type: "",
    phone: null,
  });
  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const add_user = async () => {
    const { name, email, password, c_pass, use_type, phone } = data;
    if (
      name === "" ||
      email === "" ||
      c_pass === "" ||
      phone === null ||
      password === "" ||
      use_type === ""
    ) {
      return;
    }
    if (password !== c_pass) {
      alert("Password not Matched!");
      return;
    }
    await axios
      .post(`${db_connect}/auth/signup`, {
        name: data.name,
        email: data.email,
        password: data.password,
        use_type: data.use_type,
        phone: data.phone,
      })
      .then((msg) => {
        if (msg.data.status === 1) {
          alert("signup successfully! kindly login.");
          return;
        } else if (msg.data.status === 2) {
          alert("user already Registered with this Email!");
        } else {
          alert("Failed to Signup");
        }
      });
  };
  const filterCountry = () => {};
  return (
    <div className="auth_container" id="signup">
      <h3 className="lable_">Register</h3>
      <label className="label" htmlFor="name">
        Name
      </label>
      <input
        className="input"
        type="text"
        id="name"
        name="name"
        value={data.name}
        onChange={handlechange}
      />
      <label className="label" htmlFor="email">
        Preference
      </label>
      <select
        className="select"
        id="use_type"
        name="use_type"
        value={data.use_type}
        onChange={handlechange}
      >
        <option style={{ display: "none" }}>User Type</option>
        <option className="option" value="artist">
          Artist
        </option>
        <option className="option" value="art_lover">
          Art Lover
        </option>
        <option className="option" value="org">
          Organisation
        </option>
      </select>
      <label className="label" htmlFor="email">
        Email
      </label>
      <input
        className="input"
        type="email"
        id="email"
        name="email"
        value={data.email}
        onChange={handlechange}
      />
      <label className="label" htmlFor="phone">
        Ph. No.
      </label>
      <div id="phone_no">
        <select name="country" id="phone_country">
          <div id="search_country">
            <span>🔍</span>
            <input
              onChange={filterCountry}
              id="search_input"
              className="input"
              type="text"
            />
          </div>
        <option value={"+91"}>+91</option>
          <div id="country_options">{
          
          /* countries will be here */}</div>
        </select>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={data.phone}
          onChange={handlechange}
        />
      </div>

      <label className="label" htmlFor="password">
        Password
      </label>
      <input
        className="input"
        type="password"
        id="password"
        name="password"
        value={data.password}
        onChange={handlechange}
      />
      <label className="label" htmlFor="password">
        Confirm Password
      </label>
      <input
        className="input"
        type="password"
        id="c_pass"
        name="c_pass"
        value={data.c_pass}
        onChange={handlechange}
      />
      <hr className="auth_hr" />
      <button className="btn" onClick={add_user}>
        signup
      </button>
      <p
        className="toggleText"
        onClick={() => {
          props.changeComp("login");
        }}
      >
        Alredy have an account? <i className="text-red-300">login</i>
      </p>
    </div>
  );
}
export default Signup;
