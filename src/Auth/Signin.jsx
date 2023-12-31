import React, { useState, useContext } from "react";
import axios from "axios";
import { custom_toast, db_connect } from "../Constants";
import { AuthStatus } from "../Controller";
import logo from "../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const login_schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
function Signin(props) {
  let [email, setEmail] = useState("");
  let [password, setPass] = useState("");
  const configureAuth = useContext(AuthStatus);
  const navigate = useNavigate();
  const login_user = async () => {
    props.setLoader(true);
    await axios
      .post(`${db_connect}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("utkn", res.data.token);
          configureAuth(true, res.data.token);
          navigate("/");
        } else if (res.status === 203) {
          custom_toast("Credentials not Match!", "warning", "👨🏽‍💻");
        } else if (res.status === 204) {
          custom_toast("user not Exists, kindly Register!", "warning", "👨🏽‍💻");
        } else {
          custom_toast("Server Error!", "alert", "❌");
        }
        props.setLoader(false);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(login_schema),
  });
  return (
    <div
      className="relative mx-auto flex flex-col items-center py-8 bg-cover h-screen"
      id="signin"
    >
      <Link
        to={"/"}
        className="absolute top-2 right-[-10px] md:right-[25vw] md:top-4 w-fit mx-4 border bg-sky-500 text-white px-4 py-1 text-xs md:text-sm rounded-md"
      >
        Home
      </Link>
      <img className="w-20 h-auto mx-auto" src={logo} alt="organization logo" />
      <h3 className="border border-fuchsia-400 text-allura text-xl text-fuchsia-900 text-center w-fit px-8 rounded-xl mx-auto my-2">
        SignIn to your Exhibits
      </h3>
      <Link to="/register" className="mx-auto text-sky-600 text-xs underline">
        Don't have a account? <i className="text-sx text-sky-600">SignUp</i>
      </Link>
      <form
        method="POST"
        onSubmit={handleSubmit(login_user)}
        className="flex flex-col items-center mt-16 border border-fuchsia-400 border-2 rounded-xl w-11/12 py-8 px-4 bg-white sm:w-6/12 md:w-5/12"
      >
        <label className="block w-11/12 text-fjord_one text-md" htmlFor="email">
          Email
        </label>
        <input
          {...register("email")}
          className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:none outline-none"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="alert w-11/12">{errors.email?.message}</p>
        <div className="flex justify-between w-11/12 mt-6 items-end">
          <label className="block text-fjord_one text-md" htmlFor="password">
            Password
          </label>
          <Link to="/forgot" className="text-sky-500 text-xs underline">
            Forgot Password?
          </Link>
        </div>
        <input
          {...register("password")}
          className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:none outline-none"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <p className="alert w-11/12">{errors.password?.message}</p>
        <div className="w-1/4 h-1 bg-fuchsia-400 my-4 rounded-md"></div>
        <button
          type="submit"
          className="w-11/12 text-white bg-sky-600 p-2 rounded-md text-fjord_one text-sm"
        >
          Signin
        </button>
      </form>
    </div>
  );
}

export default Signin;
