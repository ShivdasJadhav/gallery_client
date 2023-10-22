import React, { useRef, useState } from "react";
import axios from "axios";
import "../assets/css/Auth/main.css";
import { db_connect } from "../Constants";
import toast, { Toaster } from "react-hot-toast";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../assets/firebase/firebase.config";
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
    console.log("Call 1");
    axios
      .post(`${db_connect}/auth/sendOtp`, {
        email,
      })
      .then((res) => {
        if (res.status !== undefined && res.status === 200) {
          //   verifyCaptcha();
          //   const appVerifier = window.recaptchaVerifier;
          //   signInWithPhoneNumber(auth, res.data.contact, appVerifier)
          //     .then((confirmationResult) => {
          //       window.confirmationResult = confirmationResult;
          toast.success("Please check your device for OTP verification!");
          container_email.current.style.marginLeft = "-17.7rem";
          // })
          // .catch((error) => {
          //   console.error(error);
          // });
        } else {
          window.alert("We cant catch you!");
        }
      })
      .catch((e) => console.error(e));
  };

  const verifyOtp = () => {
    // window.confirmationResult
    //   .confirm(otp)
    //   .then(async (res) => {
    //     console.log(res);
    container_otp.current.style.marginLeft = "-17.5rem";
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

      <div className="auth_container">
        <h3 className="lable_">Forgot?</h3>
        <Toaster toastOptions={{ duration: 3000 }} />
        <div id="shift_comp">
          <div
            className="container_shift"
            ref={container_email}
            id="container_email"
          >
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
            <hr className="auth_hr" />
            <button className="btn" onClick={sendAuth}>
              Proceed
            </button>
          </div>
          <div
            className="container_shift"
            ref={container_otp}
            id="container_otp"
          >
            <label className="label" htmlFor="otp">
              OTP
            </label>
            <input
              className="input"
              type="tel"
              id="otp"
              name="otp"
              value={otp}
              maxLength={6}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />{" "}
            <hr className="auth_hr" />
            <button className="btn" onClick={verifyOtp}>
              Proceed
            </button>
          </div>
          <div
            className="container_shift"
            ref={container_reset}
            id="container_reset"
          >
            <label className="label" htmlFor="otp">
              New Password
            </label>
            <input
              className="input"
              type="password"
              id="newPass"
              name="newPass"
              value={newPass}
              onChange={(e) => {
                setNewPass(e.target.value);
              }}
            />
            <label className="label" htmlFor="otp">
              Confirm Password
            </label>
            <input
              className="input"
              type="password"
              id="cPass"
              name="cPass"
              value={cPass}
              onChange={(e) => {
                setCpass(e.target.value);
              }}
            />
            <hr className="auth_hr" />
            <button className="btn" onClick={updatePass}>
              Proceed
            </button>
          </div>
        </div>
        <p
          className="toggleText"
          style={{ fontStyle: "italic" }}
          onClick={() => {
            props.changeComp("login");
          }}
        >
          SignIn?
        </p>
      </div>
    </>
  );
}

export default Forgot;
