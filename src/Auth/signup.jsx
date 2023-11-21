import React, { useState } from "react";
import logo from "../assets/img/logo.png";
function Signup() {
  return (
    <div
      className="w-11/12 mx-auto flex flex-col items-center pt-8"
      id="signup"
    >
      <img className="w-20 h-auto mx-auto" src={logo} alt="organization logo" />
      <h3 className="border border-fuchsia-400 text-allura text-xl text-fuchsia-900 text-center w-fit px-8 rounded-xl mx-auto my-2">
        SignUn for your Exhibits
      </h3>
      <a href="#signin" className="mx-auto text-sky-600 text-xs underline">
        Already have an account? <i className="text-sx text-sky-600">SignIn</i>
      </a>
      <div className="flex flex-col items-center mb-8 mt-16 border border-fuchsia-400 border-2 rounded-xl w-11/12 py-8 px-4">
        <label className="block w-11/12 text-fjord_one text-md">
          First Name
        </label>
        <input
          className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
          type="f_nm"
          name="f_nm"
        />
        <label className="block w-11/12 text-fjord_one text-md">
          Last Name
        </label>
        <input
          className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
          type="l_nm"
          name="l_nm"
        />
        <label className="block w-11/12 text-fjord_one text-md">
          Preference
        </label>
        <input
          className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
          type="pref"
          name="pref"
        />
        <label className="block w-11/12 text-fjord_one text-md">
          Email
        </label>
        <input
          className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
          type="email"
          name="email"
        />
        <label className="block w-11/12 text-fjord_one text-md">
          Password
        </label>
        <input
          className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
          type="pass"
          name="pass"
        />
        <label className="block w-11/12 text-fjord_one text-md">
          Phone No.
        </label>
        <input
          className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
          type="ph_no"
          name="ph_no"
        />
        <label className="block w-11/12 text-fjord_one text-md">
          Confirm Password
        </label>
        <input
          className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
          type="c_pass"
          name="c_pass"
        />
        <div className="w-1/4 h-1 bg-fuchsia-400 my-4 rounded-md"></div>
        <button className="w-11/12 text-white bg-sky-600 p-2 rounded-md text-fjord_one text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
export default Signup;
