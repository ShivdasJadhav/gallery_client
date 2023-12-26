import React, { useRef, useState } from "react";
import axios from "axios";
import { custom_toast, db_connect } from "../Constants";
import { Toaster } from "react-hot-toast";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../assets/firebase/firebase.config";
import logo from "../assets/img/logo.png";
import forgot from "../assets/img/forgot.png";
import { Link, useNavigate } from "react-router-dom";
function Forgot(props) {
  // states
  const [email, setEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [cPass, setCpass] = useState("");
  const navigate = useNavigate();
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

  //   refs
  const container_email = useRef();
  const container_otp = useRef();
  const container_reset = useRef();

  // firebase verification

  //   validation functions
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
      default:
        return;
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
  const getDetails = async () => {
    if (email === "") {
      custom_toast("Email is required!", "warning", "⚠️");
      return;
    }
    await axios.get(`${db_connect}/auth/forgot/?email=${email}`).then((res) => {
      if (res.status === 200) {
        sendOtp(res.data.contact);
      } else {
        custom_toast("User not Found!", "warning", "⚠️");
      }
    });
  };
  const verifyCaptcha = (contact) => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          sendOtp(contact);
        },
        "expired-callback": () => {},
      }
    );
  };
  const sendOtp = (contact) => {
    verifyCaptcha(contact);
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, contact, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        custom_toast(
          "Please check your device for OTP verification Code!",
          "success",
          "👨🏽‍💻"
        );
        container_email.current.style.marginLeft = "-18rem";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const verifyOtp = () => {
    let otp =
      OTP.otp_d1 +
      OTP.otp_d2 +
      OTP.otp_d3 +
      OTP.otp_d4 +
      OTP.otp_d5 +
      OTP.otp_d6;
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        container_otp.current.style.marginLeft = "-18rem";
      })
      .catch((err) => {
        console.log(err);
        custom_toast("Invalid Credentials!", "alert", "❌");
      });
  };
  const updatePass = () => {
    if (newPass === cPass) {
      axios
        .post(`${db_connect}/auth/updatePassword`, {
          email,
          pass: newPass,
        })
        .then((res) => {
          if (res.status === 200) {
            custom_toast(
              "Password updated successfully!\nKindly login to your account",
              "success",
              "📚"
            );
            navigate("/login");
          }
        })
        .catch((e) => {
          console.error(e);
          custom_toast("Failed to update Password!", "alert", "❌");
        });
    } else {
      custom_toast("Passwords should Match!", "alert", "❌");
    }
  };

  return (
    <>
      <div id="recaptcha-container"></div>

      <div className="relative py-8 bg-cover h-screen">
        <Link
          to={"/"}
          className="absolute top-2 right-[-10px] md:right-[25vw] md:top-4 w-fit mx-4 border bg-sky-500 text-white px-4 py-1 text-xs md:text-sm rounded-md"
        >
          Home
        </Link>
        <img
          className="w-20 h-auto mx-auto"
          src={logo}
          alt="organization logo"
        />
        <h3 className="border border-fuchsia-400 text-allura text-xl text-fuchsia-900 text-center w-fit px-8 rounded-xl mx-auto my-2">
          Forgot your Password?
        </h3>
        <div className="text-center py-4">
          {" "}
          <Link
            to="/login"
            className="w-72 mx-auto text-sky-600 text-xs underline"
          >
            Got your password?{" "}
            <i className="text-sx text-sky-600">Back to signIn</i>
          </Link>
        </div>
        <Toaster toastOptions={{ duration: 3000 }} />
        <div className="md:flex items-center justify-center">
          <div className="w-86 hidden md:block">
            <img src={forgot} alt="forgotten user" className="w-full h-auto" />
          </div>
          <div className="w-80 h-fit mx-auto flex overflow-hidden border border-fuchsia-400 py-8 rounded-lg bg-white md:mx-8">
            <div
              className="flex flex-col mx-8 grow-0 shrink-0 basis-64 transition-all"
              ref={container_email}
              id="container_email"
            >
              <label
                className="text-fjord_one text-sm md:text-md my-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="text-left pl-4 border border-fuchsia-400 rounded-md py-1 text-sm outline-none focus:border-2"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="w-1/4 h-1 bg-fuchsia-400 mx-auto rounded-md my-4"></div>
              <button
                className="py-2 bg-sky-500 text-white rounded-md text-xs"
                onClick={() => {
                  getDetails();
                }}
              >
                Proceed
              </button>
            </div>
            <div
              className="flex flex-col mx-8 grow-0 shrink-0 basis-64 transition-all"
              ref={container_otp}
              id="container_otp"
            >
              <label
                className="text-fjord_one text-sm md:text-md my-2"
                htmlFor="otp"
              >
                OTP
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
                type="button"
                className="py-2 bg-sky-500 text-white rounded-md text-xs"
                onClick={() => verifyOtp()}
              >
                Proceed
              </button>
            </div>
            <div
              className="flex flex-col mx-8 grow-0 shrink-0 basis-64 transition-all"
              ref={container_reset}
              id="container_reset"
            >
              <label
                className="text-fjord_one text-sm md:text-md my-2"
                htmlFor="newPass"
              >
                New Password
              </label>
              <input
                className="text-center border border-fuchsia-400 rounded-md py-1 text-sm outline-none focus:border-2"
                type="password"
                id="newPass"
                name="newPass"
                value={newPass}
                onChange={(e) => {
                  setNewPass(e.target.value);
                }}
              />
              <label
                className="text-fjord_one text-sm md:text-md my-2"
                htmlFor="cPass"
              >
                Confirm Password
              </label>
              <input
                className="text-center border border-fuchsia-400 rounded-md py-1 text-sm outline-none focus:border-2"
                type="password"
                id="cPass"
                name="cPass"
                value={cPass}
                onChange={(e) => {
                  setCpass(e.target.value);
                }}
              />
              <div className="w-1/4 h-1 bg-fuchsia-400 mx-auto rounded-md my-4"></div>
              <button
                className="py-2 bg-sky-500 text-white rounded-md text-xs"
                onClick={updatePass}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
