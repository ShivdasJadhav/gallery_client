import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { custom_toast } from "../Constants";
import { useNavigate } from "react-router-dom";

const registerSchema = yup.object().shape({
  First_Name: yup.string(),
  Last_Name: yup.string(),
  user_type: yup.string().required(),
  email: yup.string().email().required(),
  pass: yup.string().required(),
  c_pass: yup.string().oneOf([yup.ref("pass"), null]),
  contact: yup.number().min(10).required(),
});

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    First_Name: "",
    Last_Name: "",
    email: "",
    contact: "",
    pass: "",
    c_pass: "",
    user_type: "artist",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  async function submitData() {
    const { First_Name, Last_Name, email, contact, pass, user_type } = user;
    await axios
      .post("http://localhost:5000/auth/register", {
        name: First_Name + " " + Last_Name,
        email,
        pass,
        contact: parseInt(contact),
        user_type,
      })
      .then((res) => {
        if (res.status === 201) {
          custom_toast(
            "Registered Successfully !\n \tKindly login.",
            "success",
            "✅",
            5000
          );
          navigate("/login");
        } else if (res.status === 208) {
          custom_toast(
            "User with this email is already registered. \n Kindly login..",
            "warning",
            "⚠️"
          );
        } else {
          custom_toast("Server Error!", "alert", "❌");
        }
      });
  }
  return (
    <div
      className="relative mx-auto flex flex-col items-center pt-8 bg-cover"
      id="signup"
    >
      {" "}
      <Link
        to={"/"}
        className="absolute top-2 right-[-10px] md:right-[25vw] md:top-4 w-fit mx-4 border bg-sky-500 text-white px-4 py-1 text-xs md:text-sm rounded-md"
      >
        Home
      </Link>
      <img className="w-20 h-auto mx-auto" src={logo} alt="organization logo" />
      <h3 className="border border-fuchsia-400 text-allura text-xl text-fuchsia-900 text-center w-fit px-8 rounded-xl mx-auto my-2">
        SignUn for your Exhibits
      </h3>
      <Link to="/login" className="mx-auto text-sky-600 text-xs underline">
        Already have an account? <i className="text-sx text-sky-600">SignIn</i>
      </Link>
      <form
        method="POST"
        onSubmit={handleSubmit(submitData)}
        className="w-11/12 flex flex-col items-center mb-8 mt-12 md:mt-16 border border-fuchsia-400 border-2 rounded-xl py-8 md:py-12 md:w-6/12 bg-white"
      >
        <div className="md:flex w-10/12 pl-4">
          {" "}
          <div className="flex-1 md:px-8">
            <label className="block w-full text-fjord_one text-md">
              First Name
            </label>
            <input
              {...register("Last_Name")}
              className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
              type="text"
              name="First_Name"
              value={user.First_Name}
              onChange={handleChange}
            />
            <p className="alert">{errors.First_Name?.message}</p>
          </div>
          <div className="flex-1 md:px-8">
            <label className="block w-11/12 text-fjord_one text-md">
              Last Name
            </label>
            <input
              className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
              type="text"
              name="Last_Name"
              value={user.Last_Name}
              onChange={handleChange}
            />
            <p className="alert">{errors.Last_Name?.message}</p>
          </div>
        </div>
        <div className="md:flex w-10/12 pl-4">
          <div className="md:flex-1 md:px-8">
            <label className="block w-11/12 text-fjord_one text-md">
              Who you Are ?
            </label>
            <select
              {...register("user_type")}
              className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
              name="user_type"
              value={user.user_type}
              onChange={handleChange}
            >
              <option value="artist">Artist</option>
              <option value="enthusiast">Enthusiast</option>
              <option value="organization">Organization</option>
            </select>
            <p className="alert">{errors.user_type?.message}</p>
          </div>
          <div className="md:flex-1 md:px-8">
            <label className="block w-11/12 text-fjord_one text-md">
              Email
            </label>
            <input
              {...register("email")}
              className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <p className="alert">{errors.email?.message}</p>
          </div>
        </div>
        <div className="md:flex w-10/12 pl-4">
          <div className="md:flex-1 md:px-8">
            <label className="block w-11/12 text-fjord_one text-md">
              Password
            </label>
            <input
              {...register("pass")}
              className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
              type="password"
              name="pass"
              value={user.pass}
              onChange={handleChange}
            />
            <p className="alert">{errors.pass?.message}</p>
          </div>
          <div className="md:flex-1 md:px-8">
            <label className="block w-11/12 text-fjord_one text-md">
              Phone No.
            </label>
            <input
              {...register("contact")}
              className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
              type="tel"
              name="contact"
              value={user.contact}
              onChange={handleChange}
            />
            <p className="alert">{errors.contact?.message}</p>
          </div>
        </div>
        <div className="md:flex w-10/12 pl-4">
          <div className="md:flex-1 md:px-8">
            <label className="block w-11/12 text-fjord_one text-md">
              Confirm Password
            </label>
            <input
              {...register("c_pass")}
              className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
              type="text"
              name="c_pass"
              value={user.c_pass}
              onChange={handleChange}
            />
            <p className="alert">{errors.c_pass && "Passwords Not match..!"}</p>
          </div>
          <div className="md:flex-1 md:px-8">
            <div className="w-1/4 mx-auto h-1 bg-fuchsia-400 my-4 rounded-md"></div>
            <button
              type="submit"
              className="w-11/12 text-white bg-sky-600 p-2 rounded-md text-fjord_one text-sm"
            >
              Signup
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Signup;
