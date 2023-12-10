import React, { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { custom_toast, db_connect } from "../Constants";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import published from "../assets/img/published.png";
import review from "../assets/img/review.png";
import rejected from "../assets/img/rejected.png";
import close_popup from "../assets/img/close_menu.png";
import logo from "../assets/img/logo.png";
import edit_icon from "../assets/img/edit.png";
const user_schema = yup.object().shape({
  First_Name: yup.string().required(),
  Last_Name: yup.string().required(),
  email: yup.string().email().required(),
  contact: yup.number().min(10).required(),
  bio: yup.string().max(600),
  img: yup.string(),
});

function Profile() {
  const [isEdit, setEdit] = useState(true);
  const [user, setUser] = useState({
    First_Name: "",
    Last_Name: "",
    email: "",
    contact: "",
    bio: "",
    img: logo,
  });
  let in_img = useRef();
  let out_img = useRef();
  const fetch_data = () => {
    let id = JSON.parse(localStorage.getItem("user")).id;
    let token = JSON.parse(localStorage.getItem("user")).token;
    axios
      .get(`${db_connect}/auth/getUser`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        let obj=res
        setUser({
          First_Name: obj.first_Name,
          Last_Name: obj.lastName,
          email: obj.email,
          contact: obj.contact,
          bio: obj.bio,
          img: obj.img,
        });
      });
  };
  useEffect(() => {
    fetch_data();
  }, []);

  function updateUser() {
    axios.post(`${db_connect}/auth/setUser`, { user }).then((msg) => {
      if (msg.status === 200) {
        alert("Your profile has been updated!");
        // fetch_data();
      } else {
        alert("failed to Update your Profile!");
      }
    });
  }
  const save_img = () => {
    if (in_img.current.files[0].size > 100000) {
      custom_toast("your image size is too Big!", "warning", "⚠️");
      return;
    } else {
      let reader = new FileReader();
      reader.onload = (e) => {
        setUser({ ...user, img: e.target.result });
        out_img.current.setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(in_img.current.files[0]);
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(user_schema),
  });
  let popup_otp = useRef();
  let otp_d1 = useRef();
  let otp_d2 = useRef();
  let otp_d3 = useRef();
  let otp_d4 = useRef();
  let otp_d5 = useRef();
  let otp_d6 = useRef();
  const [OTP, setOTP] = useState({
    otp_d1: "",
    otp_d2: "",
    otp_d3: "",
    otp_d4: "",
    otp_d5: "",
    otp_d6: "",
  });
  const inputFocus = (d) => {
    switch (d) {
      case 1:
        otp_d1.current.focus();
        break;
      case 2:
        otp_d2.current.focus();
        break;
      case 3:
        otp_d3.current.focus();
        break;
      case 4:
        otp_d4.current.focus();
        break;
      case 5:
        otp_d5.current.focus();
        break;
      case 6:
        otp_d6.current.focus();
        break;
    }
  };
  function handleOtp(e) {
    let name = e.target.name;
    let val = e.target.value;
    let d = parseInt(name[5]);
    setOTP({ ...OTP, [name]: val });
    if (val === "") {
      return;
    } else if (d !== 6) {
      d = d + 1;
      inputFocus(d);
    }
  }
  const popup_close = () => {
    popup_otp.current.style.display = "none";
  };
  return (
    <>
      <div id="profile" className="w-11/12 mx-auto py-4 md:w-8/12">
        <div className="flex flex-col md:flex-row">
          <div className="flex bg-sky-500 px-4 py-2 rounded-md w-full my-2 md:mx-1">
            <div>
              <img
                src={published}
                alt="symbol published"
                className="w-16 h-auto"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-fjord text-lg text-white">
                Accepted Requests
              </h2>
              <p className="text-fjord text-sm text-white">30</p>
            </div>
          </div>
          <div className="flex bg-sky-500 px-4 py-2 rounded-md w-full my-2 md:mx-1">
            <div>
              <img
                src={review}
                alt="symbol published"
                className="w-16 h-auto"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-fjord text-lg text-white">
                Requests In Review
              </h2>
              <p className="text-fjord text-sm text-white">30</p>
            </div>
          </div>
          <div className="flex bg-sky-500 px-4 py-2 rounded-md w-full my-2 md:mx-1">
            <div>
              <img
                src={rejected}
                alt="symbol published"
                className="w-16 h-auto"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-fjord text-lg text-white">Denied Requests</h2>
              <p className="text-fjord text-sm text-white">30</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(updateUser)}
          className="mx-auto w-full flex flex-col md:flex-row items-center mb-8 mt-14 md:mt-8 border border-fuchsia-400 border-2 rounded-xl py-8 md:py-12 md:w-10/12 bg-white"
        >
          <div className="md:flex md:flex-col w-10/12 pl-4">
            {" "}
            <label htmlFor="img" className="relative w-fit mx-auto">
              {!isEdit && (
                <button className="absolute flex top-1 right-1 block">
                  <img src={edit_icon} alt="edit artwork" className="mx-1" />
                </button>
              )}
              <div className="border overflow-hidden hover:cursor-pointer border-fuchsia-400 mx-auto rounded-full w-32 h-32 flex items-center justify-center">
                <img
                  ref={out_img}
                  src={user.img}
                  alt="user picture"
                  className="w-full h-auto"
                />
              </div>
              {!isEdit && (
                <input
                  onChange={save_img}
                  ref={in_img}
                  type="file"
                  name="img"
                  id="img"
                  className="hidden"
                />
              )}
            </label>
            <div className="flex-1 md:px-8">
              <label className="block w-full text-fjord_one text-md">Bio</label>
              <textarea
                rows={3}
                cols={33}
                readOnly={isEdit}
                className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
                type="text"
                name="bio"
                value={user.bio}
                onChange={handleChange}
                placeholder="I'm a Artist with the passion for explore..."
              />
            </div>
            <div className="flex-1 md:px-8">
              <label className="block w-11/12 text-fjord_one text-md">
                First Name
              </label>
              <input
                {...register("First_Name")}
                readOnly={isEdit}
                className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
                type="text"
                name="First_Name"
                value={user.First_Name}
                onChange={handleChange}
                placeholder="John"
              />
            </div>
          </div>
          <div className="md:flex md:flex-col w-10/12 pl-4">
            <div className="flex-1 md:px-8">
              <label className="block w-11/12 text-fjord_one text-md">
                Last Name
              </label>
              <input
                {...register("Last_Name")}
                readOnly={isEdit}
                className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
                type="text"
                name="Last_Name"
                value={user.Last_Name}
                onChange={handleChange}
                placeholder="Doe"
              />
            </div>
            <div className="md:flex-1 md:px-8">
              <label className="block w-11/12 text-fjord_one text-md">
                Email
              </label>
              <input
                {...register("email")}
                readOnly
                className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="john@doe.jan"
              />
            </div>
            <div className="md:flex-1 md:px-8">
              <label className="block w-11/12 text-fjord_one text-md">
                Phone No.
              </label>
              <input
                {...register("contact")}
                readOnly={isEdit}
                className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
                type="tel"
                name="contact"
                value={user.contact}
                onChange={handleChange}
                placeholder="83*****34"
              />
            </div>
            <div className="md:flex-1 md:px-8">
              <div className="w-1/4 mx-auto h-1 bg-fuchsia-400 my-4 rounded-md"></div>
              {isEdit ? (
                <button
                  type="button"
                  onClick={() => {
                    setEdit(false);
                  }}
                  className="w-11/12 text-white bg-sky-600 p-2 rounded-md text-fjord_one text-sm"
                >
                  Edit
                </button>
              ) : (
                <div className="flex flex-col md:flex-row">
                  <button
                    type="submit"
                    className="w-11/12 mb-2 md:mb-0 md:mr-2 text-white bg-fuchsia-600 p-2 rounded-md text-fjord_one text-sm"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEdit(true);
                    }}
                    className="w-11/12 mt-2 md:mt-0 md:ml-2 text-white bg-sky-600 p-2 rounded-md text-fjord_one text-sm"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
      <div
        ref={popup_otp}
        id="otp_popup"
        className="absolute top-0 bg-blue-cover hidden flex items-center justify-center h-screen w-screen"
      >
        <div
          className="mx-auto bg-white border border-fuchsia-500 p-4 rounded-md flex flex-col"
          id="container_otp"
        >
          <button
            onClick={() => popup_close("otp")}
            className="ml-auto w-fit mx-2"
          >
            <img src={close_popup} alt="close popup" className="w-4 h-4" />
          </button>
          <label className="text-fjord_one text-lg my-2" htmlFor="otp">
            Enter OTP
          </label>
          <div className="flex items-center gap-2">
            <input
              className="w-9 text-center border border-fuchsia-400 rounded-md py-1 text-sm outline-none focus:border-2"
              type="text"
              name="otp_d1"
              ref={otp_d1}
              value={OTP.otp_d1}
              maxLength={1}
              onChange={handleOtp}
            />{" "}
            <input
              className="w-9 text-center border border-fuchsia-400 rounded-md py-1 text-sm outline-none focus:border-2"
              type="text"
              name="otp_d2"
              ref={otp_d2}
              value={OTP.otp_d2}
              maxLength={1}
              onChange={handleOtp}
            />{" "}
            <input
              className="w-9 text-center border border-fuchsia-400 rounded-md py-1 text-sm outline-none focus:border-2"
              type="text"
              name="otp_d3"
              ref={otp_d3}
              value={OTP.otp_d3}
              maxLength={1}
              onChange={handleOtp}
            />{" "}
            <input
              className="w-9 text-center border border-fuchsia-400 rounded-md py-1 text-sm outline-none focus:border-2"
              type="text"
              name="otp_d4"
              ref={otp_d4}
              value={OTP.otp_d4}
              maxLength={1}
              onChange={handleOtp}
            />{" "}
            <input
              className="w-9 text-center border border-fuchsia-400 rounded-md py-1 text-sm outline-none focus:border-2"
              type="text"
              name="otp_d5"
              ref={otp_d5}
              value={OTP.otp_d5}
              maxLength={1}
              onChange={handleOtp}
            />{" "}
            <input
              className="w-9 text-center border border-fuchsia-400 rounded-md py-1 text-sm outline-none focus:border-2"
              type="text"
              name="otp_d6"
              ref={otp_d6}
              value={OTP.otp_d6}
              maxLength={1}
              onChange={handleOtp}
            />{" "}
          </div>
          <div className="w-1/4 h-1 bg-fuchsia-400 mx-auto rounded-md my-4"></div>
          <button
            className="py-2 bg-sky-500 text-white rounded-md text-xs"
            onClick={(e) => {}}
          >
            Verify
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
