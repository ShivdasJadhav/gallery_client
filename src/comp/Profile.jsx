import React, { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { db_connect } from "../Constants";
import user from "../assets/img/user.png";
import published from "../assets/img/published.png";
import review from "../assets/img/review.png";
import rejected from "../assets/img/rejected.png";
import close_popup from "../assets/img/close_menu.png";
function Profile(props) {
  // const [profile, setProfile] = useState({
  //   name: "sshivdas s jadhav",
  //   email: "jshivdas07@gmail.com",
  //   contact: "8767835325",
  //   address: "anup shivdas arange ment jssdif ksdfosdkeje bflsdfigskkfs",
  //   about: "this is mu lsdkfslkdf ksdlfk lskjfs sldff s  hdf  a s kj dfowe uq wore upw oeruwpw",
  //   img: "user",
  // });
  // const fetch_data = () => {
  //   axios
  //     .post(`${db_connect}/auth/getUser`, {
  //       email: props.user.email,
  //     })
  //     .then((data) => {
  //       let obj = data.data.user;
  //       setProfile({
  //         name: obj.name,
  //         email: obj.email,
  //         contact: obj.contact,
  //         address: obj.address,
  //         about: obj.about,
  //         img: obj.img,
  //       });
  //     });
  // };
  // useEffect(() => {
  //   console.log("me")
  //   fetch_data();
  // }, []);

  // const update_info = (e) => {
  //   setProfile((prevInfo) => ({
  //     ...prevInfo,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // function Update_profile() {
  //   let choice = window.confirm("Are you sure about these Updates!");
  //   if (choice) {
  //     axios.post(`${db_connect}/auth/setUser`, { profile }).then((msg) => {
  //       if (msg.status === 200) {
  //         alert("Your profile has been updated!");
  //         fetch_data();
  //       } else {
  //         alert("failed to Update your Profile!");
  //       }
  //     });
  //   }
  // }
  // const saveLogo = () => {
  //   let input = document.getElementById("profile_pic");
  //   if (input.files[0].size > 100000) {
  //     alert("your file size is too Big!");
  //     return;
  //   } else {
  //     let reader = new FileReader();
  //     reader.onload = (e) => {
  //       setProfile({ ...profile, img: e.target.result });
  //       document.getElementById("img_pic").setAttribute("src", e.target.result);
  //     };
  //     reader.readAsDataURL(input.files[0]);
  //   }
  // };
  let popup_otp=useRef();
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
  const popup_close = (from) => {
    popup_otp.current.style.display="none";
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
        <div className="mx-auto w-full flex flex-col md:flex-row items-center mb-8 mt-14 md:mt-8 border border-fuchsia-400 border-2 rounded-xl py-8 md:py-12 md:w-10/12 bg-white">
          <div className="md:flex md:flex-col w-10/12 pl-4">
            {" "}
            <div className="border border-fuchsia-400 mx-auto rounded-full w-32 h-32 flex items-center justify-center">
              <img src={user} alt="user picture" className="w-11/12 h-auto" />
            </div>
            <div className="flex-1 md:px-8">
              <label className="block w-full text-fjord_one text-md">Bio</label>
              <textarea
                rows={3}
                cols={33}
                className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
                type="f_nm"
                name="f_nm"
              />
            </div>
            <div className="flex-1 md:px-8">
              <label className="block w-11/12 text-fjord_one text-md">
                First Name
              </label>
              <input
                className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
                type="l_nm"
                name="l_nm"
              />
            </div>
          </div>
          <div className="md:flex md:flex-col w-10/12 pl-4">
            <div className="flex-1 md:px-8">
              <label className="block w-11/12 text-fjord_one text-md">
                Last Name
              </label>
              <input
                className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
                type="l_nm"
                name="l_nm"
              />
            </div>
            <div className="md:flex-1 md:px-8">
              <label className="block w-11/12 text-fjord_one text-md">
                Email
              </label>
              <input
                className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
                type="pref"
                name="pref"
              />
            </div>
            <div className="md:flex-1 md:px-8">
              <label className="block w-11/12 text-fjord_one text-md">
                Phone No.
              </label>
              <input
                className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
                type="ph_no"
                name="ph_no"
              />
            </div>
            <div className="md:flex-1 md:px-8">
              <div className="w-1/4 mx-auto h-1 bg-fuchsia-400 my-4 rounded-md"></div>
              <button className="w-11/12 text-white bg-sky-600 p-2 rounded-md text-fjord_one text-sm">
                Edit
              </button>
            </div>
          </div>
        </div>
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
