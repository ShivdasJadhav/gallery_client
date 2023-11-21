import React, { useRef, useState } from "react";
import axios from "axios";
import { db_connect } from "../Constants";
import toast, { Toaster } from "react-hot-toast";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../assets/firebase/firebase.config";
import logo from "../assets/img/logo.png";
function Forgot(props) {
  // states
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(null);
  const [newPass, setNewPass] = useState("");
  const [cPass, setCpass] = useState("");

  //   refs
  const container_email = useRef();
  const container_otp = useRef();
  const container_reset = useRef();

  // firebase verification

  //   validation functions
  const verifyCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          sendAuth();
        },
        "expired-callback": () => {},
      }
    );
  };
  const sendAuth = () => {
    // axios
    //   .post(`${db_connect}/auth/sendOtp`, {
    //     email,
    //   })
    //   .then((res) => {
    //     if (res.status !== undefined && res.status === 200) {
    //       //   verifyCaptcha();
    //       //   const appVerifier = window.recaptchaVerifier;
    //       //   signInWithPhoneNumber(auth, res.data.contact, appVerifier)
    //       //     .then((confirmationResult) => {
    //       //       window.confirmationResult = confirmationResult;
    //       toast.success("Please check your device for OTP verification!");
    container_email.current.style.marginLeft = "-18rem";
    //     // })
    //     // .catch((error) => {
    //     //   console.error(error);
    //     // });
    //   } else {
    //     window.alert("We cant catch you!");
    //   }
    // })
    // .catch((e) => console.error(e));
  };

  const verifyOtp = () => {
    // window.confirmationResult
    //   .confirm(otp)
    //   .then(async (res) => {
    //     console.log(res);
    container_otp.current.style.marginLeft = "-18rem";
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     window.warn("wrong otp");
    //   });
  };
  const updatePass = () => {
    if (newPass === cPass) {
      axios
        .post(`${db_connect}/auth/updatePass`, {
          email,
          newPass,
        })
        .then((res) => {
          console.log("updated successfully!");
          console.log(res);
        })
        .catch((e) => console.error(e));
    } else {
      alert("Passwords not Match!");
    }
  };

  return (
    <>
      <div id="recaptcha-container"></div>

      <div className="py-8">
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
          <a
            href="#signup"
            className="w-72 mx-auto text-sky-600 text-xs underline"
          >
            Got your password?{" "}
            <i className="text-sx text-sky-600">Back to signin</i>
          </a>
        </div>
        <Toaster toastOptions={{ duration: 3000 }} />
        <div className="w-80 mx-auto flex overflow-hidden border border-fuchsia-400 py-8 rounded-lg">
          <div
            className="flex flex-col mx-8 grow-0 shrink-0 basis-64 transition-all"
            ref={container_email}
            id="container_email"
          >
            <label className="text-fjord_one text-lg my-2" htmlFor="email">
              Email
            </label>
            <input
              className="border border-fuchsia-400 rounded-md py-1 text-sm outline-none focus:border-2"
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
              onClick={sendAuth}
            >
              Proceed
            </button>
          </div>
          <div
            className="flex flex-col mx-8 grow-0 shrink-0 basis-64 transition-all"
            ref={container_otp}
            id="container_otp"
          >
            <label className="text-fjord_one text-lg my-2" htmlFor="otp">
              OTP
            </label>
            <input
              className="border border-fuchsia-400 rounded-md py-1 text-sm outline-none focus:border-2"
              type="tel"
              id="otp"
              name="otp"
              value={otp}
              maxLength={6}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />{" "}
            <div className="w-1/4 h-1 bg-fuchsia-400 mx-auto rounded-md my-4"></div>
            <button
              className="py-2 bg-sky-500 text-white rounded-md text-xs"
              onClick={verifyOtp}
            >
              Proceed
            </button>
          </div>
          <div
            className="flex flex-col mx-8 grow-0 shrink-0 basis-64 transition-all"
            ref={container_reset}
            id="container_reset"
          >
            <label className="text-fjord_one text-lg my-2" htmlFor="newPass">
              New Password
            </label>
            <input
              className="border border-fuchsia-400 rounded-md py-1 text-sm outline-none focus:border-2"
              type="password"
              id="newPass"
              name="newPass"
              value={newPass}
              onChange={(e) => {
                setNewPass(e.target.value);
              }}
            />
            <label className="text-fjord_one text-lg my-2" htmlFor="cPass">
              Confirm Password
            </label>
            <input
              className="border border-fuchsia-400 rounded-md py-1 text-sm outline-none focus:border-2"
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
    </>
  );
}

export default Forgot;
